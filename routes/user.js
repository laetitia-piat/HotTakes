//import express + installation router + url vers les routes dans fichiers controllers
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//creation de nos routes et lien avec le controller correspondant
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Export du router
module.exports = router;