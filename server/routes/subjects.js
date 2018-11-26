const Router = require('koa-router');

const router = new Router({
  prefix: '/subjects'
});


router.post('/bySpecialty', async ctx => {



  ctx.body = {
    res: 'OK OK OK bySpecialty'
  };
});
module.exports = router;
