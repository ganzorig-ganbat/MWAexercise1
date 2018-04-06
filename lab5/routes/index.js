const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
// return promise
const index = require('../modules/index');
const async = require('../modules/async');

/* GET home page. */
router.get('/', function(req, res, next) {
  // using promise
  index.then(json => {
    res.render('index', { title: 'User list', users: json }); 
  })
  
});

module.exports = router;
