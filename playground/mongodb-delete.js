const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

 const db=client.db('TodoApp')
//delete many
// db.collection('Todos').deleteMany({text: 'Eat lunch'},(err,result)=>{
//   if(err)
//   {return console.log('Unalble to inser todo',err);
// }
//   console.log(result);
// });

// delete one
// db.collection('Todos').deleteOne({text: 'Eat lunch'},(err,result)=>{
//   if(err)
//   {return console.log('Unalble to inser todo',err);
// }
//   console.log(result);
// });

// find one and delete

// db.collection('Todos').findOneAndDelete({completed: false},(err,result)=>{
//   if(err)
//   {return console.log('Unalble to inser todo',err);
// }
//   console.log(result);
// });

//delete many
// db.collection('Users').deleteMany({name: 'sahil'},(err,result)=>{
//   if(err)
//   {return console.log('Unalble to inser todo',err);
// }
//   console.log(result);
// });
// delete one
db.collection('Users').findOneAndDelete({_id: new ObjectID("5c232bf3e04883fe495939c5")},(err,result)=>{
  if(err)
  {return console.log('Unalble to inser todo',err);
}
  console.log(JSON.stringify(result,undefined,2));
});


});
