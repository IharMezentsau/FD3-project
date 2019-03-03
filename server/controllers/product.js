var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_details = function (req, res) {
    Product.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
