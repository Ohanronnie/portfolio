import tailwind from "bun-plugin-tailwind";
import { rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
const result = await Bun.build({
  entrypoints: ["portfolio/src/index.html"],
  outdir: "dist",
  plugins: [tailwind],
  minify: true,
  target: "browser",
  publicPath: "/",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
});
if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}
console.log(`Built ${result.outputs.length} files into dist.`);
