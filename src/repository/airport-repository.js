const { Airport } = require('../models/index');

class AirportRepository {
    async createAirport({name, cityId}) {
        try {
            const airport = await Airport.create({
                name: name,
                cityId: cityId
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAirport(id) {
        try {
            const airport = await Airport.findByPk(id);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateAirport(id, data) {
        try {
            const obj = {};
            if(data.name) obj.name = data.name;
            if(data.cityId) obj.cityId = data.cityId;

            const numRowsChanged = await Airport.update(obj,{
                where: {
                    id: id
                }
            });
            
            return numRowsChanged;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteAirport(id) {
        try {
            await Airport.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
};

module.exports = AirportRepository;