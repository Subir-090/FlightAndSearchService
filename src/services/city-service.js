const { CityRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class CityService extends CrudService {
    constructor() {
        super(new CityRepository());
    }

    async getAllCities(data) {
        try {
            const cities = await this.repository.getAll(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

};

module.exports = CityService;