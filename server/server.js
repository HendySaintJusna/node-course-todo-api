var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require ('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    
     var todo = new Todo({
     	text: req.body.text
     });
  

     
     todo.save().then((doc) =>{
     	res.send(doc);
     }, (e) => {
        res.status(400).send(e);
     });

     


});


app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });

});



app.listen(3000, () =>{
   console.log('Started on port 3000');
});


module.exports = {app};






//creation dun objet Todo
// var newTodo = new Todo({
// 	text:'Cook dinner',
// 	completedAt:6
// });

// var otherTodo = new Todo({
// 	text:'   Edit this video   '
// });

// var User = new Users ({
// 	name: '  Hendy  ',
// 	email: '    hendybadboy_@hotmail.fr',
// 	age:21
// })

//save info dans la database
// newTodo.save().then((doc) =>{
//     console.log('Saved todo', doc);
// }, (e) =>{
// 	console.log('Unable to save todo');
// });


// otherTodo.save().then((doc2) => {
//     console.log(JSON.stringify(doc2,undefined,2));
// }, (e) =>{
//     console.log('Unable to save todo');
// }); 



// User.save().then((doc3) => {
//     console.log(JSON.stringify(doc3,undefined,2));
// }, (e) =>{
//     console.log('Unable to save todo');
// }); 
