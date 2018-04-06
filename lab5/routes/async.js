const express = require('express');
const router = express.Router();
// return async promise
const async = require('../modules/async');

/* async. */
router.get('/', function(req, res, next) {
    // using async
    async.then(data => {
        res.render('index', { title: 'User list', users: data }); 
    })
});

module.exports = router;
