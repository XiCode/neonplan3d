import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room } from "../model.ts";
import { FloorMap } from "./walk.ts";
import { xrHeadInWall, xrLanding, xrSlide } from "./xr-walk.ts";

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

/** Two rooms side by side, the wall between them at x = 4 and no door in it. */
function twoRooms(): FloorMap {
  const b = emptyBuilding();
  const f = newFloor("eg", "EG", 0);
  f.rooms = [rect("a", 0, 0, 4, 4), rect("b", 4, 0, 8, 4)];
  b.floors = [f];
  return new FloorMap(b, f);
}

test("a free step goes through whole", () => {
  assert.deepEqual(xrSlide(twoRooms(), [2, 2], 0.1, 0.05), [0.1, 0.05]);
});

test("a wall stops the step across it and the head slides along it", () => {
  const map = twoRooms();
  assert.deepEqual(xrSlide(map, [3.7, 2], 0.1, 0), [0, 0]);
  assert.deepEqual(xrSlide(map, [3.7, 2], 0.1, 0.1), [0, 0.1]);
});

test("a new floor lands on the same spot when it is free", () => {
  assert.deepEqual(xrLanding(twoRooms(), [2, 2]), [2, 2]);
});

test("a new floor lands beside the wall standing on the spot", () => {
  const map = twoRooms();
  const p = xrLanding(map, [4, 2]);
  assert.ok(!map.blocked(p));
  assert.ok(Math.hypot(p[0] - 4, p[1] - 2) < 0.6);
});

test("off the floor's rooms one lands in the nearest room", () => {
  const map = twoRooms();
  const p = xrLanding(map, [20, 2]);
  assert.equal(map.roomAt(p)?.id, "b");
  assert.ok(!map.blocked(p));
});

test("the head counts as in the wall only inside it", () => {
  const map = twoRooms();
  assert.equal(xrHeadInWall(map, [4, 2]), true);
  assert.equal(xrHeadInWall(map, [2, 2]), false);
  // close in front of the wall face, out of it
  assert.equal(xrHeadInWall(map, [3.8, 2]), false);
});
