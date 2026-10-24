// Walking in VR with the walk's floor map: the stick stops at walls and slides along them, doors let you
// through, a new floor puts you where you stood (or the nearest free spot), and a head pushed into a wall
// (the body walks on in the real room) darkens the view. Plain maths, so it is tested without a headset.
import { centroid, type Vec2 } from "../model.ts";
import type { FloorMap } from "./walk.ts";

/** A head this close to a wall face counts as inside it (the near plane would cut the wall open). */
const HEAD = 0.08;

/** The part of a stick step (dx, dz) from p that stays clear of walls: whole, along one axis, or none. */
export function xrSlide(map: FloorMap, p: Vec2, dx: number, dz: number): Vec2 {
  if (!map.blocked([p[0] + dx, p[1] + dz])) return [dx, dz];
  if (!map.blocked([p[0] + dx, p[1]])) return [dx, 0];
  if (!map.blocked([p[0], p[1] + dz])) return [0, dz];
  return [0, 0];
}

/** Where one lands on a new floor: the same spot, else the nearest free one; off its rooms, the nearest room. */
export function xrLanding(map: FloorMap, p: Vec2): Vec2 {
  if (map.roomAt(p) || !map.rooms.length) return map.freeNear(p);
  let best = map.rooms[0];
  let dist = Infinity;
  for (const r of map.rooms) {
    const c = centroid(r.points);
    const d = Math.hypot(c[0] - p[0], c[1] - p[1]);
    if (d < dist) {
      dist = d;
      best = r;
    }
  }
  return map.freeNear(centroid(best.points));
}

/** Whether the head stands in a wall. */
export function xrHeadInWall(map: FloorMap, head: Vec2): boolean {
  return map.blocked(head, HEAD);
}
