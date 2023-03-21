const { AirportService } = require('../services/index');

async function create(request,response) {
    try {
        const name = request.body.name;
        const cityId = request.body.cityId;
        
        const airport = AirportService.createAirport({name, cityId});

        response.status(201).json({
            data: airport,
            message: 'Succesfully added the city',
            err: {},
            success: true
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            data: {},
            message: 'Not able to add the airport',
            err: error,
            success: false
        });
    }
}

async function get(id) {}

async function destroy(id) {}

async function update(id,data) {}

module.exports = {
    create,
    get,
    update,
    destroy
};