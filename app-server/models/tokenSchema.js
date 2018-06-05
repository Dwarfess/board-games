var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var tokenSchema = new Schema({
    token: String,
    user_id:String
});

mongoose.model("token", tokenSchema);//create module with schema