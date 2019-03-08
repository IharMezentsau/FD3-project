var express = require('express'),
    router = express.Router(),
    controller = require('../controllers/controller');

router.get('/:type/:id?', controller.product_details);

module.exports = router;