import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { a } = require("../lib/banner-a.ts".replace(".ts", ".ts"));

async function main() {
  const { a } = await import("../lib/banner-a.ts");
  const { b } = await import("../lib/banner-b.ts");
  const buf = Buffer.from(`${a}${b}`, "base64");
  const outDir = join(root, "public");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "banner.jpg"), buf);
  console.log(`wrote public/banner.jpg (${buf.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
