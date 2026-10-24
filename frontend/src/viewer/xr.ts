/// <reference types="webxr" />
// Immersive view (WebXR): walk through the house in VR, or set it on the table as a doll's house (AR
// passthrough). The camera rides in a rig whose pose and scale map real metres onto the building.

import {
  BackSide,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  Line,
  LineBasicMaterial,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Raycaster,
  SphereGeometry,
  Vector3,
  type PerspectiveCamera,
  type Scene,
  type WebGLRenderer,
} from "three";

export type XrMode = "vr" | "ar";
/** Trigger (or a pinch): toggle; A/X: up (brighter, open, warmer); B/Y: down. */
export type XrAction = "toggle" | "up" | "down";

const SESSION: Record<XrMode, XRSessionMode> = { vr: "immersive-vr", ar: "immersive-ar" };

/** The doll's house stands with its bottom centre this far in front, at table height (real metres). */
const TABLE = new Vector3(0, 0.75, -0.7);
const ORIGIN = new Vector3();
/** Walking speed (m/s), snap turn, and how fast the doll's house turns (rad/s) and grows (per s). */
const SPEED = 1.6;
const SNAP = Math.PI / 6;
const SPIN = 1.2;
const GROW = 0.9;
const DEAD = 0.2;
/** Laser length in real metres. */
const LASER = 4;
/** xr-standard gamepad: A/X and B/Y. */
const BUTTON_UP = 4;
const BUTTON_DOWN = 5;
/** Grip, and pressing the stick. */
const BUTTON_GRIP = 1;
const BUTTON_STICK = 3;
/** How far a stick goes before a snap turn or a floor change. */
const SNAP_AT = 0.6;

/** Which immersive modes this browser offers (none without HTTPS or a headset). */
export async function xrModes(): Promise<XrMode[]> {
  const xr = typeof navigator === "undefined" ? undefined : navigator.xr;
  if (!xr) return [];
  const modes: XrMode[] = [];
  for (const m of ["vr", "ar"] as const) {
    try {
      if (await xr.isSessionSupported(SESSION[m])) modes.push(m);
    } catch {
      // a permissions policy blocks it
    }
  }
  return modes;
}

export interface XrStart {
  /** World point the real origin lands on: the feet (vr) or the house's bottom centre (ar). */
  anchor: Vector3;
  /** Direction faced, as the orbit's theta. */
  yaw: number;
  /** World metres per real metre (1 in vr). */
  scale: number;
}

export class XrRig {
  readonly rig = new Group();
  mode: XrMode | null = null;
  readonly anchor = new Vector3();
  private yaw = 0;
  private scale = 1;
  private scale0 = 1;
  private renderer: WebGLRenderer | null = null;
  private session: XRSession | null = null;
  private last = 0;
  /** The snap turn waits for the stick to come back to the middle. */
  private snapped = false;
  private readonly camera: PerspectiveCamera;
  private readonly scene: Scene;
  private readonly onFrame: (now: number) => void;
  private readonly onEnd: () => void;
  /** A controller pointed and pressed: the ray in world space. */
  onPoint: ((ray: Raycaster, action: XrAction) => void) | null = null;
  /** The right stick asked for the floor above (1) or below (-1); in AR the grip steps through the floors. */
  onFloor: ((dir: 1 | -1) => void) | null = null;
  /** VR: the left stick moves along the gaze, up and down included (stick press switches it). */
  flying = false;
  /** VR walking: the part of a level step (dx, dz) from the head that the walls let through. */
  constrain: ((head: [number, number], dx: number, dz: number) => [number, number]) | null = null;
  /** Black round the eyes while the head stands in a wall. */
  private readonly blind = new Mesh(
    new SphereGeometry(0.15, 16, 8),
    new MeshBasicMaterial({ color: 0x000000, side: BackSide, depthTest: false, depthWrite: false }),
  );
  private readonly lasers: Group[] = [];
  private readonly pressed = new WeakMap<XRInputSource, boolean[]>();
  private readonly head = new Vector3();
  private readonly dir = new Vector3();

  constructor(camera: PerspectiveCamera, scene: Scene, onFrame: (now: number) => void, onEnd: () => void) {
    this.camera = camera;
    this.scene = scene;
    this.onFrame = onFrame;
    this.onEnd = onEnd;
    this.blind.renderOrder = 100;
    this.blind.frustumCulled = false;
    this.blind.visible = false;
  }

  /** Starts a session; call it straight from a tap (browsers want a user gesture). */
  async start(mode: XrMode, renderer: WebGLRenderer, at: XrStart): Promise<void> {
    if (this.mode || !navigator.xr) return;
    const session = await navigator.xr.requestSession(SESSION[mode], { optionalFeatures: ["local-floor"] });
    this.mode = mode;
    this.flying = false;
    this.renderer = renderer;
    this.session = session;
    this.anchor.copy(at.anchor);
    this.yaw = at.yaw;
    this.scale = this.scale0 = at.scale;
    this.last = 0;
    this.place();
    this.scene.add(this.rig);
    this.rig.add(this.camera);
    this.camera.add(this.blind);
    renderer.xr.enabled = true;
    renderer.xr.setReferenceSpaceType("local-floor");
    // three has restored the canvas size by the time it reports the end
    renderer.xr.addEventListener("sessionend", this.ended);
    try {
      await renderer.xr.setSession(session);
    } catch (e) {
      void session.end().catch(() => undefined);
      this.ended();
      throw e;
    }
    session.addEventListener("select", this.onSelect);
    for (let i = 0; i < 2; i++) {
      const c = renderer.xr.getController(i);
      if (!c.children.length) {
        const geo = new BufferGeometry();
        geo.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 0, 0, -LASER], 3));
        c.add(new Line(geo, new LineBasicMaterial({ color: 0xa0f0ff, transparent: true, opacity: 0.6 })));
      }
      this.rig.add(c);
      this.lasers.push(c);
    }
    renderer.setAnimationLoop((t) => this.onFrame(t));
  }

  /** VR: the feet follow their floor (it moves while floors open and close). */
  setHeight(y: number): void {
    if (Math.abs(this.anchor.y - y) < 1e-4) return;
    this.anchor.y = y;
    this.place();
  }

  /** The head in the building (world x, z). */
  headAt(): [number, number] {
    this.camera.getWorldPosition(this.head);
    return [this.head.x, this.head.z];
  }

  /** VR: carries the rig so the head stands over (x, z) – a floor change lands here. */
  moveHeadTo(x: number, z: number): void {
    const [hx, hz] = this.headAt();
    this.anchor.x += x - hx;
    this.anchor.z += z - hz;
    this.place();
  }

  setBlind(on: boolean): void {
    this.blind.visible = on;
  }

  /** World metres per real metre when the session started. */
  get startScale(): number {
    return this.scale0;
  }

  stop(): void {
    void this.session?.end().catch(() => undefined);
  }

  /** Thumbsticks, once per frame: left walks (vr) or slides the house (ar), right turns (and resizes in ar). */
  step(now: number): boolean {
    const dt = this.last ? Math.min(0.1, (now - this.last) / 1000) : 0;
    this.last = now;
    if (!this.session || !dt) return false;
    let moved = false;
    const frame = this.renderer?.xr.getFrame();
    for (const src of this.session.inputSources) {
      const buttons = src.gamepad?.buttons;
      if (buttons && frame) {
        const was = this.pressed.get(src) ?? [];
        const now = buttons.map((b) => b.pressed);
        this.pressed.set(src, now);
        if (now[BUTTON_UP] && !was[BUTTON_UP]) this.point(frame, src, "up");
        if (now[BUTTON_DOWN] && !was[BUTTON_DOWN]) this.point(frame, src, "down");
        if (this.mode === "vr" && now[BUTTON_STICK] && !was[BUTTON_STICK]) this.flying = !this.flying;
        if (this.mode === "ar" && now[BUTTON_GRIP] && !was[BUTTON_GRIP]) this.onFloor?.(1);
      }
      const axes = src.gamepad?.axes;
      if (!axes || axes.length < 4) continue;
      const x = Math.abs(axes[2]) > DEAD ? axes[2] : 0;
      const y = Math.abs(axes[3]) > DEAD ? axes[3] : 0;
      if (src.handedness !== "right") {
        if (!x && !y) continue;
        // along the gaze: kept level when walking, sideways always level
        this.camera.getWorldDirection(this.dir);
        const climb = this.mode === "vr" && this.flying ? this.dir.y : 0;
        const level = Math.hypot(this.dir.x, this.dir.z);
        if (level < 1e-3) continue;
        const fx = this.dir.x / level;
        const fz = this.dir.z / level;
        const step = SPEED * dt * this.scale;
        const ahead = climb ? Math.sqrt(1 - climb * climb) : 1;
        let dx = (-y * fx * ahead - x * fz) * step;
        let dz = (-y * fz * ahead + x * fx) * step;
        // walking (not flying): walls stop the head and it slides along them, doors let it through
        if (this.mode === "vr" && !this.flying && this.constrain) [dx, dz] = this.constrain(this.headAt(), dx, dz);
        this.anchor.x += dx;
        this.anchor.z += dz;
        this.anchor.y += -y * climb * step;
        moved = true;
      } else if (this.mode === "vr") {
        const ax = Math.abs(x);
        const ay = Math.abs(y);
        if (ax < SNAP_AT && ay < SNAP_AT) this.snapped = false;
        else if (!this.snapped && ay > ax) {
          // up and down: the floor above or below
          this.snapped = true;
          this.onFloor?.(y < 0 ? 1 : -1);
        } else if (!this.snapped) {
          this.snapped = true;
          // turn round the head, not round the spot the session started on
          const a = x > 0 ? -SNAP : SNAP;
          this.camera.getWorldPosition(this.head);
          const dx = this.anchor.x - this.head.x;
          const dz = this.anchor.z - this.head.z;
          this.anchor.x = this.head.x + dx * Math.cos(a) + dz * Math.sin(a);
          this.anchor.z = this.head.z - dx * Math.sin(a) + dz * Math.cos(a);
          this.yaw += a;
          moved = true;
        }
      } else if (x || y) {
        this.yaw -= x * SPIN * dt;
        this.scale = Math.min(200, Math.max(1, this.scale * Math.exp(y * GROW * dt)));
        moved = true;
      }
    }
    if (moved) this.place();
    return moved;
  }

  private readonly onSelect = (e: XRInputSourceEvent): void => {
    this.point(e.frame, e.inputSource, "toggle");
  };

  /** The input's pointing ray, carried from the real room into the building. */
  private point(frame: XRFrame, src: XRInputSource, action: XrAction): void {
    const space = this.renderer?.xr.getReferenceSpace();
    const pose = space ? frame.getPose(src.targetRaySpace, space) : undefined;
    if (!pose || !this.onPoint) return;
    const m = new Matrix4().fromArray(pose.transform.matrix).premultiply(this.rig.matrixWorld);
    const ray = new Raycaster();
    ray.ray.origin.setFromMatrixPosition(m);
    ray.ray.direction.set(0, 0, -1).transformDirection(m);
    this.onPoint(ray, action);
  }

  /** rig(p) = anchor + R(yaw) · (p − origin) · scale: the real origin (feet or table spot) sits on the anchor. */
  private place(): void {
    const p = this.mode === "ar" ? TABLE : ORIGIN;
    const c = Math.cos(this.yaw);
    const s = Math.sin(this.yaw);
    this.rig.rotation.set(0, this.yaw, 0);
    this.rig.scale.setScalar(this.scale);
    this.rig.position.set(
      this.anchor.x - (p.x * c + p.z * s) * this.scale,
      this.anchor.y - p.y * this.scale,
      this.anchor.z - (-p.x * s + p.z * c) * this.scale,
    );
    this.rig.updateMatrixWorld(true);
  }

  private readonly ended = (): void => {
    const renderer = this.renderer;
    this.session?.removeEventListener("select", this.onSelect);
    for (const c of this.lasers) c.removeFromParent();
    this.lasers.length = 0;
    if (renderer) {
      renderer.xr.removeEventListener("sessionend", this.ended);
      renderer.setAnimationLoop(null);
      renderer.xr.enabled = false;
    }
    this.blind.visible = false;
    this.blind.removeFromParent();
    this.camera.removeFromParent();
    this.camera.scale.set(1, 1, 1);
    this.rig.removeFromParent();
    this.renderer = null;
    this.session = null;
    const was = this.mode;
    this.mode = null;
    if (was) this.onEnd();
  };
}
