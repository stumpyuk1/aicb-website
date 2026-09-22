import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function chunk(name) {
  const src = readFileSync(join(root, "lib", `banner-${name}.ts`), "utf8");
  const match = src.match(/export const \w+ = [`"]([\s\S]*?)[`"]/);
  if (!match) return "";
  return match[1].replace(/\s+/g, "").trim();
}

const parts = ["a", "b", "c", "d"].map(chunk).filter(Boolean);
const buf = Buffer.from(parts.join(""), "base64");
const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "banner.jpg"), buf);
console.log(`wrote public/banner.jpg (${buf.length} bytes)`);
