const { CityService } = require('../services/index');

const cityService = new CityService();

async function create(req,res) {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create the city',
            err: error
        });
    }
}

async function destroy(req,res) {
    try {
        await cityService.delete(req.params.id);
        return res.status(200).json({
            data: {},
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete the city',
            err: error
        });
    }
}

async function update(req,res) {
    try {
        const updatedRows = await cityService.update(req.params.id,
            req.body);
        return res.status(200).json({
            data: updatedRows,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update the city',
            err: error
        });
    }
}

async function fetch(req,res) {
    try {
        const city = await cityService.get(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch the city',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    fetch
};