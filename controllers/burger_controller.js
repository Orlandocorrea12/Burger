var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/index', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});
router.post('/burgers', function (req, res) {
  burger.insertOne([
    'burger_name'
  ], [
      req.body.burger_name
    ], function () {

      res.redirect('/index');
    });
});
router.post('/burgers/:id', function (req, res) {
  var condition = 'Id = ' + req.params.id;
  console.log("condition", condition);
  burger.updateOne({
    devoured: true
  }
    , condition, function () {
      res.redirect('/index');
    });
});
module.exports = router;