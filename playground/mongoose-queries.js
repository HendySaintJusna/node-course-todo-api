const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// var id = '5a57cde4f01abe27984edbd311';
//CHALL
var id = '5a57d3f9cb643527e4610d5f';


if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}

// Todo.find({
// 	_id:id
// }).then((todos) =>{
// 	console.log('Todos',todos);
// });


// Todo.findOne({
// 	_id:id
// }).then((todo) =>{
// 	console.log('Todo',todo);
// });

//trouver par lid
// Todo.findById(id).then((todo) =>{
// 	if(!todo){
// 		return console.log('Id not valid');
// 	}
// 	console.log('Todo by id',todo)
// }).catch((e) => console.log(e));


//CHALL 
Users.findById(id).then((user)=>{
	if(!user){
		return console('Id not valid');
	}
	console.log('User by id',user);
});