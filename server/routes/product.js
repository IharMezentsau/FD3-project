var express = require('express');
var router = express.Router();

var mobile_controller = require('../controllers/mobile');
var notebook_controller = require('../controllers/notebook');

router.get('/mobiles/', mobile_controller.product_details);

router.get('/notebooks/', notebook_controller.product_details);

module.exports = router;