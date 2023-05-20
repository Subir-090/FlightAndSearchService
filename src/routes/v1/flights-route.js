const express = require('express');
const route = express.Router();

const FlightMiddleware = require('../../middlewares/flight-middleware');

const flight = require('../../controllers/flight-controller');

route.post('/',FlightMiddleware.validateCreateFlight,flight.create);
route.get('/:id',flight.get);
route.patch('/:id',flight.update);
route.get('/',flight.getAll);

module.exports = route;