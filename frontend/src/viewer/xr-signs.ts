// Device signs for the immersive view: the HTML pins do not reach the headset, so each device gets a
// sprite with its icon, state and name, redrawn only when one of them changes.

import { CanvasTexture, Group, SRGBColorSpace, Sprite, SpriteMaterial, type Camera, type Raycaster } from "three";

export interface SignSpec {
  id: string;
  /** Inline SVG markup of the icon. */
  icon: string;
  text: string;
  name: string;
  active: boolean;
  unavailable: boolean;
  /** CSS colour of a light that is on; empty otherwise. */
  glow: string;
  x: number;
  y: number;
  z: number;
}

const W = 320;
const H = 112;

interface Sign {
  sprite: Sprite;
  canvas: HTMLCanvasElement;
  texture: CanvasTexture;
  key: string;
}

/** Icons as images, by markup and colour (the SVG draws in currentColor). */
const icons = new Map<string, HTMLImageElement>();

function iconImage(svg: string, color: string, ready: () => void): HTMLImageElement | null {
  const key = `${color}|${svg}`;
  const cached = icons.get(key);
  if (cached) return cached.complete && cached.naturalWidth ? cached : null;
  let markup = svg.replace(/<svg\b/, `<svg style="color:${color}"`);
  if (!/xmlns=/.test(markup)) markup = markup.replace(/<svg\b/, '<svg xmlns="http://www.w3.org/2000/svg"');
  const img = new Image();
  img.onload = ready;
  img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
  icons.set(key, img);
  return null;
}

export class XrSigns {
  readonly group = new Group();
  private readonly signs = new Map<string, Sign>();
  private specs: SignSpec[] = [];
  private size = 0.24;

  /** Places and redraws the signs; `size` is a sign's width in world units. */
  update(specs: SignSpec[], size: number): void {
    this.specs = specs;
    this.size = size;
    const seen = new Set<string>();
    for (const s of specs) {
      seen.add(s.id);
      let sign = this.signs.get(s.id);
      if (!sign) {
        const canvas = document.createElement("canvas");
        canvas.width = W;
        canvas.height = H;
        const texture = new CanvasTexture(canvas);
        texture.colorSpace = SRGBColorSpace;
        const sprite = new Sprite(new SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
        sprite.userData.entity = s.id;
        sprite.renderOrder = 10;
        this.group.add(sprite);
        sign = { sprite, canvas, texture, key: "" };
        this.signs.set(s.id, sign);
      }
      const key = [s.icon, s.text, s.name, s.active, s.unavailable, s.glow].join("|");
      if (sign.key !== key && this.draw(sign, s)) sign.key = key;
      // the sign hovers a little above the device
      sign.sprite.position.set(s.x, s.y + size * 0.3, s.z);
      sign.sprite.scale.set(size, (size * H) / W, 1);
    }
    for (const [id, sign] of this.signs) {
      if (seen.has(id)) continue;
      this.drop(sign);
      this.signs.delete(id);
    }
  }

  /** The device whose sign the ray meets first, if any. */
  pick(ray: Raycaster, camera: Camera): string | null {
    ray.camera = camera;
    const hit = ray.intersectObjects([...this.group.children], false)[0];
    return (hit?.object.userData.entity as string | undefined) ?? null;
  }

  dispose(): void {
    for (const sign of this.signs.values()) this.drop(sign);
    this.signs.clear();
    this.group.removeFromParent();
  }

  private drop(sign: Sign): void {
    sign.texture.dispose();
    sign.sprite.material.dispose();
    sign.sprite.removeFromParent();
  }

  /** Draws the pill; false while the icon is still loading (it is drawn again once it is there). */
  private draw(sign: Sign, s: SignSpec): boolean {
    const accent = s.unavailable ? "#7a8796" : s.active ? s.glow || "#ffd479" : "#a0f0ff";
    const img = s.icon ? iconImage(s.icon, accent, () => this.update(this.specs, this.size)) : null;
    const ctx = sign.canvas.getContext("2d")!;
    ctx.clearRect(0, 0, W, H);
    const r = H / 2 - 4;
    ctx.beginPath();
    ctx.roundRect(4, 4, W - 8, H - 8, r);
    ctx.fillStyle = "rgba(8, 16, 34, 0.82)";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = accent;
    ctx.globalAlpha = s.active ? 1 : 0.55;
    ctx.stroke();
    ctx.globalAlpha = 1;
    if (img) ctx.drawImage(img, 22, 26, 60, 60);
    ctx.fillStyle = s.unavailable ? "#7a8796" : "#ffffff";
    ctx.textBaseline = "middle";
    ctx.font = "600 40px system-ui, sans-serif";
    const left = s.icon ? 98 : 30;
    ctx.fillText(s.text || "–", left, s.name ? 42 : H / 2, W - left - 24);
    if (s.name) {
      ctx.fillStyle = "rgba(220, 240, 255, 0.7)";
      ctx.font = "24px system-ui, sans-serif";
      ctx.fillText(s.name, left, 82, W - left - 24);
    }
    sign.texture.needsUpdate = true;
    return !s.icon || !!img;
  }
}
