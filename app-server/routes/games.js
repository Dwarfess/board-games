var express = require('express');
var router = express.Router();
var gamesCtrl = require('../controllers/gamesCtrl');

router.post('/games/create', gamesCtrl.createGame);//add new game to the list
router.get('/games/search', gamesCtrl.searchGame);//get all the games or only one
router.put('/games/update', gamesCtrl.updateGame);//edit current game
router.delete('/games/delete/:id', gamesCtrl.deleteGame);//edit current game

router.get('/news/all', gamesCtrl.getNews);//get all the games or only one

module.exports = router;
