const Router = require('koa-router');

const router = new Router({
  prefix: '/subjects'
});


router.get('/bySpecialty', async ctx => {



  ctx.body = {
    required,
    optional
  };
});
module.exports = router;




const optional = [
  {
    text: 'Инженерная графика',
    place: '10',
    vacantPlaces: '1'
  },
  {
    text: 'Средства разработки веб-сайтов',
    place: '10',
    vacantPlaces: '1'
  },
  {
    text: 'Язык разметки XML',
    place: '10',
    vacantPlaces: '10'
  },
  {
    text: 'Язык программирования JAVA',
    place: '10',
    vacantPlaces: '4'
  }
];
const required = ['Инженерная графика', 'Средства разработки веб-сайтов', 'Язык разметки XML', 'Язык программирования JAVA'];
