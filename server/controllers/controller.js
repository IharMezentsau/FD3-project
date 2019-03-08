var Models = {},
    Mobile = require('../models/mobile'),
    Notebooks = require('../models/notebook'),
    url = require("url");

Models.mobiles = Mobile;
Models.notebooks = Notebooks;

exports.product_details = function (req, res) {
    let query = url.parse(req.url, true).query;

    let findObject = {};
    if (req.params.id !== undefined) {
        findObject["_id"] = req.params.id;
    } else {
        if (query.title !== undefined) {
            findObject.title = new RegExp(query.title);
        }
        if (query.priceStart !== undefined) {
            findObject.price = {"$gt": query.priceStart};
        }
        if (query.priceEnd !== undefined) {
            findObject.price = {...findObject.price, "$lt": query.priceEnd};
        }
        if (query.screenSizeStart !== undefined) {
            findObject.sizeScreen = {"$gt": query.screenSizeStart};
        }
        if (query.screenSizeEnd !== undefined) {
            findObject.sizeScreen = {...findObject.sizeScreen, "$lt": query.screenSizeEnd};
        }
        if (query.RAMStart !== undefined) {
            findObject.sizeScreen = {"$gt": query.RAMStart};
        }
        if (query.RAMEnd !== undefined) {
           findObject.ram = {...findObject.ram, "$lt": query.RAMEnd};
        }
        if (query.flashMemoryStart !== undefined) {
            findObject.flashMemory = {"$gt": query.flashMemoryStart};
        }
        if (query.flashMemoryEnd !== undefined) {
            findObject.flashMemory = {...findObject.flashMemory, "$lt": query.flashMemoryEnd};
        }
    }

    Models[req.params.type].find(findObject, function (err, product) {
        if (err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(product);
    })
};
