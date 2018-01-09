
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
   if(err){
     return console.log('Unable to connect to mongodb server');
   }
     console.log('connected to mongodb server');

     //chercher un document, seulement ceux qui ont completed : false, un name ...
    // db.collection('Todos').find({
    //     _id:new ObjectID('5a53b585d6095d16661d5e03')
    // }).toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //   console.log('Unable to fetch todos',err);
    // });


    //  db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos count:${count}`);
    // },(err)=>{
    //   console.log('Unable to fetch todos',err);
    // });

//challl

     db.collection('Users').find({name: 'Ted'}).toArray().then((docs)=>{
     console.log('Users');
     console.log(JSON.stringify(docs,undefined,2));
    
    });


     // db.close();

});