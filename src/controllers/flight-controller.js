const { FlightService } = require('../services/index');

const flightService = new FlightService();

async function create(req,res) {
    try {
        const flight = await flightService.create(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully added this flight',
            err: {} 
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to add this flight',
            err: error 
        });
    }
}

async function getAll(req,res) {
    try {
        const flights = await flightService.getAll(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: 'Successfully fetched flights',
            err: {} 
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the flight',
            err: error 
        });
    }
}

async function get(req,res) {
    try {
        const flight = await flightService.get(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully fetched the flight',
            err: {} 
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the flight',
            err: error 
        });
    }
}

module.exports = {
    create,
    getAll,
    get
}