import page from "./index.html";

const server = Bun.serve({
  port: 3001,
  routes: { "/*": page },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});
console.log(`Portfolio running at ${server.url}`);
