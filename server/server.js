const express = require('express');
const server = express();
var cors = require('cors');

server.use(express.json()); //allows access to req.body
server.use(cors);

module.exports = server;
