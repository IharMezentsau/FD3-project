const express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', '/')));

const routes = require('./routes');
app.use('/', routes);

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));