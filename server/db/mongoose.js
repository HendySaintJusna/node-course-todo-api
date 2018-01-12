var mongoose = require('mongoose');
//connection a la database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/NewApp');

module.exports = {
	mongoose
}