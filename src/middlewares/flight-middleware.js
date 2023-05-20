const { CLIENT_ERROR_CODES, SUCCESS_CODES, SERVER_ERROR_CODES } = require('../utils/status-codes');

function validateCreateFlight(req,res,next) {
    if(!req.body.departureAirportId || !req.body.destinationAirportId
        || !req.body.airplaneId || !req.body.departureTime
        || !req.body.arrivalTime || !req.body.flightNumber
        || !req.body.price) {

            return res.status(CLIENT_ERROR_CODES.BAD_REQUEST).json({
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