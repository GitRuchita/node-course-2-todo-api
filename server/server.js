var express=require('express');
var bodyParser = require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo} =require('./models/todo');
var {User} =require('./models/users');


var app =express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  var todo =new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000 ,()=>{
console.log('started on port 3000');

});
module.exports={app};








// var mongoose=require('mongoose');
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoAppMongoose');
//
// var Todo =mongoose.model('Todo',{
// text:{
//   type:String,
//   required: true,
//   minlength:1,
//   trim:true
// },
// completed:{
//   type:Boolean,
//   default: false
// },
// completedAt:{
// type: Number,
// default:null
// }
//
//
// });
//
// // var newTodo =new Todo({
// //   text:'New Record',
// //   completed: false,
// //   completedAt: 3
// // });
// //
// // newTodo.save().then((doc) =>{
// // console.log('Saved todo',doc);
// // },(e)=> {
// //    console.log('Unable to save todo')
// // });
//
//
// var User =mongoose.model('User',{
//   email:{
//     type:String,
//     required:true,
//     trim:true,
//     minlength:1
//   }
// });
//
// var user= new User({
// email:'ruchita@123.com     '
// });
//
// user.save().then ((doc)=>{
// console.log('User saved ',doc);
// },(e)=>{
//   console.log('Unable to save user',e);
// });
