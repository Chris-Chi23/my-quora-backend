import Koa from 'koa';
import koaBody from 'koa-body';
import koaStatic from 'koa-static';
import error from 'koa-json-error';
import parameter from 'koa-parameter';
import mongoose from 'mongoose';
import path from 'path';
import {useRouting} from './routes';

const app = new Koa();
const { connectionStr } = require('./config');

// mongoose.connect(connectionStr, { useNewUrlParser: true }, () => console.log('MongoDB 连接成功了！'));
// mongoose.connection.on('error', console.error);
//
// app.use(koaStatic(path.join(__dirname, 'public')));
// app.use(error({
//     postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
// }));
// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         uploadDir: path.join(__dirname, '/public/uploads'),
//         keepExtensions: true,
//     },
// }));
app.use(parameter(app));
useRouting(app);

app.listen(3000, () => console.log('程序启动在 3000 端口了'));