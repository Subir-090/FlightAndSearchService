const express = require('express');
const route = express.Router();

const v1Api = require('./v1/index');

route.use('/v1',v1Api);

module.exports = route;