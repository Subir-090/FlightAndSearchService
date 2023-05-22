const { StatusCodes } = require('http-status-codes');

function validateCreateFlight(req,res,next) {
    if(!req.body.departureAirportId || !req.body.destinationAirportId
        || !req.body.airplaneId || !req.body.departureTime
        || !req.body.arrivalTime || !req.body.flightNumber
        || !req.body.price) {

            return res.status(StatusCodes.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'Invalid data',
            });

    }

    next();
}

module.exports = {
    validateCreateFlight
};