import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public");
const outFile = join(outDir, "banner.jpg");
const partsDir = join(root, "scripts", "banner-b64");

mkdirSync(outDir, { recursive: true });

if (existsSync(outFile) && statSync(outFile).size > 80000) {
  console.log(`keeping existing public/banner.jpg (${statSync(outFile).size} bytes)`);
  process.exit(0);
}

if (!existsSync(partsDir)) {
  console.warn("scripts/banner-b64 missing; skipping JPEG write");
  process.exit(0);
}

const files = readdirSync(partsDir)
  .filter((f) => f.endsWith(".b64"))
  .sort();

if (!files.length) {
  console.warn("no banner-b64 parts found; leaving public/banner.jpg untouched");
  process.exit(0);
}

const b64 = files
  .map((f) => readFileSync(join(partsDir, f), "utf8"))
  .join("")
  .replace(/\s+/g, "");

const buf = Buffer.from(b64, "base64");
writeFileSync(outFile, buf);
console.log(`wrote public/banner.jpg (${buf.length} bytes from ${files.length} parts)`);
