const Router = require('koa-router');
const {cookie} = require('../config');

const router = new Router({
  prefix: '/auth'
});

const cookieOptions = {
  maxAge: 1000 * 60 * 60 * 60,  // would expire after 1 day
  httpOnly: false,              // The cookie only accessible by the web server
  signed: false                 // Indicates if the cookie should be signed
};

router.post('/login', async ctx => {

  ctx.status = 200;
  ctx.cookies.set(cookie.session_name, "idSession", cookieOptions);
  ctx.body = {
    status: 200,
    session: 'session',
    userInfo: {
      name: 'string',
      email: 'string',
      group: 'string'
    }
	};
});

router.get('/infoById', async ctx => {
  console.log('infoById +++', ctx)


  ctx.body = {
    status: 200,
    data: {
      name: 'Vlad Iliev',
      id: 1525,
    }
  };
});
module.exports = router;
