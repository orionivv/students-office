const Koa = require('koa');
const http = require('http');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Router = require('koa-router');

const ProxyAuth = require('./routes/auth.js');
const ProxySubjects = require('./routes/subjects');

const app = new Koa();
const router = new Router();

app.proxy = true;
app.server = http.createServer(app.callback());
app.listen = (...args) => {
  app.server.listen.call(app.server, ...args);
  return app.server;
};
// {credentials: true}
app.use(cors());
app.use(bodyParser());

app.use(router.routes());

app.use(async (ctx, next) => {
  try {
    console.log('Session from cookie:', ctx.cookies.get(cookie.session_name));
    console.log('Session from request:', ctx.request.body.session);
    ctx.session = ctx.cookies.get(cookie.session_name) || ctx.request.body.session;
  } catch (e) {
    // console.log(e);
  }
  await next();
});


app.use(ProxyAuth.routes());
app.use(ProxySubjects.routes());

app.listen(3000, () => {
	console.log(`Listening on: 3000 port`);
});
