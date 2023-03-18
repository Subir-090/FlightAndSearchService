const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.cityService = new CityRepository();
    }

    async createCity({ name }) {
        try {
            const city = await this.cityService.createCity({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteCity(id) {
        try {
            const response = await this.cityService.deleteCity(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateCity(id,data) {
        try {
            const updatedRows = await this.cityService.updateCity(id,data);
            return updatedRows;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getCity(id) {
        try {
            const city = await this.cityService.getCity(id);
            return city;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
};

module.exports = CityService;