const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user.models');
router.post('/login',passport.authenticate('local'), userController.login)
router.post('/logout', userController.logout);
router.post('/currentUser', userController.getCurrentUser);
module.exports = router;