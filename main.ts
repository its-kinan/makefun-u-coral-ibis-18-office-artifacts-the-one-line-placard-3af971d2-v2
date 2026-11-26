// Office Artifacts: The One-Line Placard Contest.
// Writes a single museum placard line for an ordinary office object
// treated as an ancient artifact, to /output/entry.txt.
// Deterministic: fixed text, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fern, plastic, c. 2015. Sacred green thing, watered only by guilt. It outlived three managers and every deadline. Donor unknown, presumed promoted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
