var fs = require("fs");
var formidable = require('formidable');
var url = require('url');
var qs = require("querystring");

var mongoose = require('mongoose');
var gameModel = mongoose.model('game');
var newsModel = mongoose.model('news');
var tokenModel = mongoose.model('token');

//GET ALL ITEMS
module.exports.searchGame = function(req, res){
    let parse_url = url.parse(req.url).query;
    let title = qs.parse(parse_url).title;
    let regex = new RegExp([title].join(""), "i");
    let find = title ? {"title":regex} : {};

    gameModel.find(find, function(err, doc){
        res.type('application/json');
        res.jsonp(doc);
    });
};

//ADD NEW ITEM
module.exports.createGame = function(req, res){
    let item = {
        "title":req.body.title,
        "description":req.body.description,
        "price":req.body.price,
        "img":req.body.img
    } ;
    tokenModel.findOne({"token":req.headers.authorization}, function(err, doc){
        if(doc){
            gameModel.create(item, function (err, doc) {
                if (err) console.log(err);
                console.log(`Item ${doc.title} was created`);

                gameModel.find({}, function(err, doc){
                    // console.log(doc)
                    res.type('application/json');
                    res.jsonp(doc);
                });
            });
        } else  {
            console.log("*****************************error")
            let resp = {"field":"title","message":"Title is required"};
            res.status(422).jsonp(resp);
        }
    });
};

//UPDATE ITEM
module.exports.updateGame = function(req, res){
    console.log("********************")
    console.log(req.headers.authorization);
    //find token
    console.log(req.body._id)
    tokenModel.findOne({"token": req.headers.authorization}, function (err, doc) {
        if (doc) {
            gameModel.findOneAndUpdate({"_id": req.body._id},
                {
                    $set: {
                        "title": req.body.title,
                        "description": req.body.description,
                        "price": req.body.price
                    }
                }, {new: true}, function (err, doc) {
                    console.log(`Item ${doc.title} was updated`);

                    gameModel.find({}, function(err, doc){
                        res.type('application/json');
                        res.jsonp(doc);
                    });
                });
        } else {
            res.status(401).send("");
        }
    }); //catch (e) {console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);

};

//DELETE ITEM
module.exports.deleteGame = function(req, res){
    console.log(req.params.id);
    tokenModel.findOne({"token":req.headers.authorization}, function(err, doc){
        if(doc){
            gameModel.remove({"_id":req.params.id}, function(err, doc){
                console.log(`Item _id: ${req.params.id} was deleted`);

                gameModel.find({}, function(err, doc){
                    res.type('application/json');
                    res.jsonp(doc);
                });
            });
        } else  {
            res.status(401).send("");
        }
    });
};


//GET ALL ITEMS
module.exports.getNews = function(req, res){
    newsModel.find({}, function(err, doc){
        res.type('application/json');
        res.jsonp(doc);
    });
};