var express = require('express');
var rdb = require('../lib/rethink');
var auth = require('../lib/auth');
var router = express.Router();

router.post('/', function (request, response) {
  var newUser = {
      message: request.body.message,
  };

  rdb.save('message', newMessage)
  .then(function (result) {
      response.json(result);
  });
});

module.exports = router;
