const { City } = require('../models/index');
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');

class CityRepository extends CrudRepository {   

    constructor() {
        super(City);
    }

    async getAll(filter) {
        try {
            const filterObj = {
                where: {
                    name: {
    
                    }
                }
            }
    
            if(filter.name) {
                filterObj.where.name = {
                    [Op.like] : filter.name
                };
            }

            const cities = await City.findAll(filterObj);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }

};

module.exports = CityRepository;
