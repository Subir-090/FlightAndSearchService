const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(id) {
        try {
            await City.destroy({
                where: {
                    id: id
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(id) {
        try {
            const city = await City.findOne({
                where:{
                    id: id
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
   
    async updateCity(id,data) {
        try {
            const updatedRows = await City.update(
                {
                    name: data.name
                },
                {
                    where:{
                        id: id
                    }
                }
            );
            return updatedRows;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
};

module.exports = CityRepository;
