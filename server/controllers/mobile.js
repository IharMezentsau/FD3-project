var Mobile = require('../models/mobile');
var url = require("url");

exports.product_details = function (req, res) {
    let query = url.parse(req.url, true).query;
    console.log(req.params.id);
    let findObject = {};
    if (req.params.id !== undefined) {
        findObject["_id"] = req.params.id;
    } else {
        if (query.priceStart !== undefined) {
            findObject.price["$gt"] = query.priceStart;
        }
        if (query.priceEnd !== undefined) {
            findObject.price["$lt"] = query.priceEnd;
        }
        if (query.screenSizeStart !== undefined) {
            findObject.sizeScreen["$gt"] = query.screenSizeStart;
        }
        if (query.screenSizeEnd !== undefined) {
            findObject.sizeScreen["$lt"] = query.screenSizeEnd;
        }
        if (query.RAMStart !== undefined) {
            findObject.sizeScreen["$gt"] = query.RAMStart;
        }
        if (query.RAMEnd !== undefined) {
           findObject.ram["$lt"] = query.RAMEnd;
        }
        if (query.flashMemoryStart !== undefined) {
            findObject.flashMemory["$gt"] = query.flashMemoryStart;
        }
        if (query.flashMemoryEnd !== undefined) {
            findObject.flashMemory["$lt"] = query.flashMemoryEnd;
        }
    }
    Mobile.find(findObject, function (err, product) {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(product);
    })
};

exports.product = function (req, res) {
    Mobile.find({"_id": req.params.id}, function (err, product) {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(product);
    })
};