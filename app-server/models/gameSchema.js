var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var gameScheme = new Schema({
    title: String,
    description: String,
    price: Number,
    img: String
});

mongoose.model("game", gameScheme);//create module with schema