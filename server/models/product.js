var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MobileSchema = new Schema({
    title: {type: String, required: true},
    img: {type: String, required: true},
    text: {type: String, required: true},
    price: {type: Number},
    sizeScreen: {type: Number, required: true},
    technologyScreen: {type: String, required: true},
    os: {type: String},
    ram: {type: Number},
    flashMemory: {type: Number, required: true},
    camera: {type: Number},
    color: {type: String}
},
    {
    versionKey: false,
        collection: "mobile"
});

// Export the model
module.exports = mongoose.model('mobile', MobileSchema);