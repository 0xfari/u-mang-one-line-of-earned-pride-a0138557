import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line of Earned Pride — one quiet, earned moment for an ordinary
// person: four failed driving tests behind her, the fifth one passed, and
// the pride shows only in how long she keeps sitting in the car.
// The pride is in the pause, not in the pass: she stays in the car.
const LINE =
  "She had failed the driving test four times; on the fifth, she parked, turned off the engine, and sat there a while with both hands still on the wheel.";

// No trophy, no speech — just both hands on the wheel a moment longer.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
