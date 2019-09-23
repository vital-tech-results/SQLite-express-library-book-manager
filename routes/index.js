/* eslint-disable no-console */
const express = require('express');
const router = express.Router();

var Book = require('../models').Book;


/* GET articles listing */
// When request is made to '/books'
router.get('/', (req, res) => {
  // Get all from Book table and order by 'title'
  res.render('index', {
    title: 'Library Book Database'
  });
});

module.exports = router;

/*
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
*/