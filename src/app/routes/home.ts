import Router from 'koa-router';

const router = new Router();
const { index, upload } = require('../controllers/home');

router.get('/', index);
router.post('/upload', upload);

module.exports = router;
function f() {
    console.log('inside f')
}
export = f;
type a = 1 | 2 | 3 | 'ss';

let x : a;
x = 'ss';
declare const www = 5;