// const mongoose = require('mongoose');
// const connectionStr = 'chris:Cxm321807%';
// console.log(encodeURIComponent(connectionStr));
// mongoose.connect('mongodb+srv://' + encodeURIComponent(connectionStr) + '@my-quora.pnxuj.mongodb.net/db_myQuora?retryWrites=true&w=majority', {useNewUrlParser: true});
// mongoose.connection.on('error', console.error);
// const { Schema, model } = mongoose;
//
// const userSchema = new Schema({
//     _id: {type: String, required: true},
//     age: { type: Number, required: true }}, {timestamps: true });
//
// const User = model('User', userSchema);
// const r =  foo();
// console.log("sss", r)
//
// async function foo(){
//     const r = await User.find();
//     console.log(r);
// }

import Koa from 'koa';

const app = new Koa();
app.use(ctx => {
    const {headers} = ctx.request;
    ctx.body = headers;
});
app.listen(1234, ()=>{
    console.log('ssss');
});