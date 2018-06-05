var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var newsSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    date: String,
    content: String,
    img: String
});

mongoose.model("news", newsSchema);//create module with schema