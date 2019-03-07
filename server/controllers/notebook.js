var Notebook = require('../models/notebook');

exports.product_details = function (req, res) {
    Notebook.find(function (err, product) {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(product);
    })
};

exports.product = function (req, res) {
    Notebook.find({"_id": req.params.id}, function (err, product) {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(product);
    })
};