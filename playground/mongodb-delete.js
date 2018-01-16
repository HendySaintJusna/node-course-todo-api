
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
   if(err){
     return console.log('Unable to connect to mongodb server');
   }
     console.log('connected to mongodb server');

   
    //deleteMany(supprime tout les doc avec txt:'Eat lunch')
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
    //    console.log(result);
    // });

    
    //deleteOne(supprime le premier doc avec txt:'Eat lunch')
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // })


    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    //     console.log(result)
    // });

    //CHALL

    // db.collection('Todos').findOneAndDelete({_id:new ObjectID('5a53af1488c5a118b4741bbf')}).then((res)=>{
    //    console.log(res);
    // });



     // db.close();

});