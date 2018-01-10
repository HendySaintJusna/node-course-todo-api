
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
   if(err){
     return console.log('Unable to connect to mongodb server');
   }
     console.log('connected to mongodb server');

    
    // db.collection('Todos').findOneAndUpdate({
    //  _id: new ObjectID('5a555b95d6095d16661d86c0')
    // },{
    //     //update operator mongodb documentaire
    //     //remplace completed:false a true
    //     $set:{
    //         completed:true
    //     }


    // },  {
    //         returnOriginal:false
    //     }).then((result)=>{
    //         console.log(result);
    //     });



    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a53af1488c5a118b4741bbf')
    }, {

     $set:{
        name:'Ralphy'
     }
       
    }, {
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });




     // db.close();

});