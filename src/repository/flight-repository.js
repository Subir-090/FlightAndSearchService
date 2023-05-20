const { Flight, Airplane } = require('../models/index');
const CrudRepository = require('./crud-repository');

class FlightRepository extends CrudRepository {

    constructor() {
        super(Flight);
    }

    async create(data) {
        try {
            const airplane = await Airplane.findByPk(data.airplaneId);
            const totalSeats = airplane.capacity;

            data = {... data, AvailableSeats: totalSeats};

            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAll(filter) {
        try {
            const flights = await Flight.findAll({
                where: filter
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
};  

module.exports = FlightRepository;