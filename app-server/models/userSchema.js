var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String
});

mongoose.model("user", userSchema);//create module with schema