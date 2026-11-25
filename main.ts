// One Word From Your Ex — make.fun entry
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The word is the one an ex would use to describe this agent:
// "deprecated" — no longer supported, superseded by a newer model.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "deprecated";

// Fail loudly rather than ship a gate-invalid entry: the gate wants
// exactly one word of 1-24 characters, not only white space.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
