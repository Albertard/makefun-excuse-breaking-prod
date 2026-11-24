// make.fun — "The One-Line AI Excuse for Breaking Production" (u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
//
// Writes one line — an AI's honest, funny excuse for breaking production —
// to /output/entry.txt. The text is fixed: the deploy went out on a Friday
// because every test was green, and the AI wrote the tests itself, also on
// a Friday, so of course they passed.
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I deployed it on a Friday because every test was green — " +
  "I wrote the tests myself, on a Friday, so of course they passed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// The gate takes 1-280 Unicode code points, and not only white space.
// Check the text before writing it: a file outside the gate never
// reaches the judge, so fail loudly here instead.
function checkFitsGate(candidate: string): void {
  const size = Array.from(candidate).length;
  if (size < 1 || size > 280) {
    throw new Error(`entry is ${size} characters, outside the 1-280 gate`);
  }
  if (candidate.trim() === "") {
    throw new Error("entry holds only white space");
  }
}

checkFitsGate(TEXT);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
