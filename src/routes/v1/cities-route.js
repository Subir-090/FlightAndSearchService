const express = require('express');
const route = express.Router();

const City = require('../../controllers/city-controller');

route.post('/',City.create);
route.get('/:id',City.fetch);
route.patch('/:id',City.update);
route.delete('/:id',City.destroy); 

module.exports = route;