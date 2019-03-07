var express = require('express');
var router = express.Router();
var path = require('path');

var mobile_controller = require('../controllers/mobile');
var notebook_controller = require('../controllers/notebook');

router.get('/mobiles/:id?', mobile_controller.product_details);
//router.get('/mobiles/:id', mobile_controller.product);

router.get('/notebooks', notebook_controller.product_details);
router.get('/notebooks/:id', notebook_controller.product);

module.exports = router;