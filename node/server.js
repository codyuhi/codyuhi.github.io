const http = require('http');
const https = require('https');

const port = process.env.PORT || 3000;

const app = require('./app');

const server = http.createServer(app);

server.listen(port);

console.log('Listening for http on port ' + port + ' . . . ');