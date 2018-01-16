const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });


//Todo.findOneAndRemove

Todo.findByIdAndRemove('5a5d65e385d8d93ee78224d0').then((todo)=>{
  console.log(todo);
});