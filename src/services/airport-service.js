const { AirportRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class AirportService extends CrudService {

    constructor() {
        super(new AirportRepository());
    }

};

module.exports = AirportService;