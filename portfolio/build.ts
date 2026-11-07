import tailwind from "bun-plugin-tailwind";
import { rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
const result = await Bun.build({
  entrypoints: ["src/index.html"],
  outdir: "dist",
  target: "browser",
  plugins: [tailwind],
  minify: true,
  publicPath: "/",
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
});
if (!result.success) throw new AggregateError(result.logs, "Build failed");
console.log(`Built ${result.outputs.length} files into dist.`);
