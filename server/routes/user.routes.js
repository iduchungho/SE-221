const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const User = require('../models/user.models');
router.post('/login',passport.authenticate('local'), catchAsync(userController.login))
router.post('/logout', catchAsync(userController.logout));
router.post('/currentUser', catchAsync(userController.getCurrentUser));
module.exports = router;