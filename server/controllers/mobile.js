var Mobile = require('../models/mobile');

exports.product_details = function (req, res) {
    Mobile.find(function (err, product) {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(product);
    })
};
