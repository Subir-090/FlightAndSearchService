const { AirportRepository } = require('../repository/index');

const airportRepository = new AirportRepository();

class AirportService {
    async createAirport({name, cityId}) {
        try {
            const airport = await airportRepository.createAirport({name,cityId});
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAirport(id) {
        try {
            const airport = await airportRepository.getAirport(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateAirport(id, data) {
        try {
            const numRowsChanged = await airportRepository.updateAirport(id, data);
            return numRowsChanged;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteAirport(id) {
        try {
            await airportRepository.deleteAirport(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
};

module.exports = AirportService;