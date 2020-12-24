const koa = require("koa");
const mount = require("koa-mount");
const static = require("koa-static");
const fs = require("fs");
const app = new koa();
app.use(static(__dirname + '/source/'))
app.use(
  mount("/", async (ctx) => {
    const document = fs.readFileSync(__dirname + "/source/index.html", "utf-8");
    ctx.body = document;
  })
);
app.listen(3000);
console.log('app has listened at port 3000')
