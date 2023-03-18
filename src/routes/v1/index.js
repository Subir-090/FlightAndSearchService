const express = require('express');
const route = express.Router();

const {create, destroy, update, fetch} = require('../../controllers/city-controller');

route.post('/city',create);
route.get('/city/:id',fetch);
route.patch('/city/:id',update);
route.delete('/city/:id',destroy); 

module.exports = route;