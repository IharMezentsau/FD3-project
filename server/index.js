var express = require('express'),
    bodyParser = require('body-parser'),
    product = require('./routes/product'),
    app = express(),
    isProd = typeof(process) !== 'undefined' && process && process.env && process.env.PORT,
    port = isProd ? process.env.PORT : 3000,
    mongoose = require('mongoose'),
    dev_db_url = "mongodb://root:root123456@ds247410.mlab.com:47410/fd3projectmezentsau",
    mongoDB = process.env.MONGODB_URI || dev_db_url,
    path = require('path'),
    absolutePath = path.join(__dirname, "../public"),
    fs = require('fs');

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(absolutePath));
app.use('/mobiles/', express.static(absolutePath));
app.use('/notebooks/', express.static(absolutePath));
app.use('/basket', express.static(absolutePath));

app.use('/shop', product);

app.get('/*', (req, res) => {
    let rt = `${__dirname}/${req.url}`;
    fs.readFile(rt, function (err, data) {
        //if (err) {
        //    res.redirect('/');
        //}
        //else {
            res.sendFile(rt);
        //}
    });

});

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
