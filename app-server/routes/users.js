var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

router.post('/users', userCtrl.login);//check user and login or create new user
router.get('/user', userCtrl.getUser);//get this user =====INSTEAD OF GET
router.patch('/users', userCtrl.updateUser);//edit current user

module.exports = router;
