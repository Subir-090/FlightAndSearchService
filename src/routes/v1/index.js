const express = require('express');
const route = express.Router();

const CityRoute = require('./cities-route');
const FlightRoute = require('./flights-route');

route.use('/cities',CityRoute);
route.use('/flights',FlightRoute);

module.exports = route;