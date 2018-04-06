const express = require('express');
const router = express.Router();
// return observable promise
const obs = require('../modules/observable');

/* observable. */
router.get('/', function(req, res, next) {
    // using observable
    obs.subscribe(data => {
        res.render('index', { title: 'User list', users: data }); 
    })
});

module.exports = router;
