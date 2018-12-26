const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

 const db=client.db('TodoApp')

 // db.collection('Todos').findOneAndUpdate({
 //   _id: new ObjectID('5c2327cbe04883fe49593820')
 // },{
 //   $set: {
 //     completed:false
 //   }
 // },{returnOriginal:false
 // },(err,result)=>{
 //   if(err)
 //   {return console.log('Unalble to inser todo',err);
 // }
 //   console.log(result);
 // });

 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5c232cfde04883fe49593a38')
 },{
   $set: {
     name:"Sahil"
   },
    $inc: { age: -1 }
 },{returnOriginal:false
 },(err,result)=>{
   if(err)
   {return console.log('Unalble to inser todo',err);
 }
   console.log(result);
 });

 //  { $inc: { quantity: -2, "metrics.orders": 1 } }
//delete many
// db.collection('Todos').deleteMany({text: 'Eat lunch'},(err,result)=>{
//   if(err)
//   {return console.log('Unalble to inser todo',err);
// }
//   console.log(result);
// });



});
