const { AirportService } = require('../services/index');

const airportService = new AirportService();

async function create(req,res) {
    try {
        const name = req.body.name;
        const cityId = req.body.cityId;

        const airport = await airportService.create({name, cityId});
        return res.status(201).json({
            data: airport,
            message: 'Successfully created an airport',
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'Not able to add the airport',
            success: false,
            err: error
        });
    }
}

async function get(req,res) {
    try {
        const airport = await airportService.get(req.id);
        return res.status(200).json({
            data: airport,
            message: 'Successfully fetched an airport',
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'Not able to fetch the airport',
            success: false,
            err: error
        });
    }
}

async function update(req,res) {
    try {
        const id = req.body.id;
        const data = req.body.data;

        const numRowsChanged = await airportService.update(id, data);
        return res.status(200).json({
            data: numRowsChanged,
            message: 'Successfully updated an airport',
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'Not able to update the airport',
            success: false,
            err: error
        });
    }
}

async function destroy(req,res) {
    try {
        const response = await airportService.delete(req.id);
        return res.status(200).json({
            data: response,
            message: 'Successfully deleted an airport',
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'Not able to delete airport',
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    update,
    destroy
};