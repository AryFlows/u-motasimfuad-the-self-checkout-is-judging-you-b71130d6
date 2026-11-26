import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Twelve yogurts. No spoon. No plan. Please place your life choices in the bagging area.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
