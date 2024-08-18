const http = require('http');

const routes = require('./assignment1Routes');

const server = http.createServer(routes.handler);

server.listen(3001);