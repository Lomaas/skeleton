var express = require('express');
var rdb = require('../lib/rethink');
var auth = require('../lib/auth');
var router = express.Router();

router.get('/', auth.authorize, function (request, response) {
    rdb.findAll('messages')
    .then(function (messages) {
        response.json(messages);
    });
});

module.exports = router;
