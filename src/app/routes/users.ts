import Router from 'koa-router';
import f = require("./home");
import www from './home';

const router = new Router({prefix: '/users'});
router.get('/', ctx => {
});
router.post('/', ctx => {
});
