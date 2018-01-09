//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Genere un id different a chaque fois
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
   if(err){
     return console.log('Unable to connect to mongodb server');
   }
     console.log('connected to mongodb server');

     // db.collection('Todos').insertOne({
     //   text: 'Something to do.',
     //   completed: false
     // }, (err, result) =>{
     // 	if(err){
     // 		return console.log('Unable to insert todo',err);
     // 	}

     // 	console.log(JSON.stringify(result.ops, undefined,2));

     //});


   //insert new document into Users (name,age,location)--chall
     // db.collection('Users').insertOne({
     // 	_id:943,
     // 	name:'Hendy',
     // 	age:18,
     // 	location:'Montreal'
     // }, (err,result) => {
     // 	if(err){
     // 		return console.log('Impossible de configurer cet utilisateur',err);
     // 	}
     // 	//result.ops est un array du document ajouter
     // 	// gettimestamp() => quand ca ete creer
     // 	console.log(result.ops[0]._id);

     // });


     db.close();

});