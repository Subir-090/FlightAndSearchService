const { FlightRepository } = require('../repository/index');
const { Op } = require('sequelize');
const CrudService = require('./crud-service');

class FlightService extends CrudService{
    #areArrivalAndDepartureTimesValid(arrivalDateTime,departureDateTime) {
        const arrival = new Date(arrivalDateTime);
        const departure = new Date(departureDateTime);

        return arrival > departure;

    }

    #propertyExists(obj, property) {
        return obj.hasOwnProperty(property);
    }

    #createFilterObject(data) {
        const filter = {};
        
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.destinationAirportId) {
            filter.destinationAirportId = data.destinationAirportId;
        }

        if(data.airplaneId) {
            filter.airplaneId = data.airplaneId;
        }
        
        if(data.maxPrice) {
            if(this.#propertyExists(filter,"price")) {
                filter.price = {... filter.price, 
                    [Op.lte] : data.maxPrice
                }
            }  else {
                filter.price = {
                    [Op.lte] : data.maxPrice
                }
           }
        }

        if(data.minPrice) {
            if(this.#propertyExists(filter,"price")) {
                filter.price = {... filter.price, 
                    [Op.gte] : data.minPrice
                }
            }  else {
                filter.price = {
                    [Op.gte] : data.minPrice
                }
            }
        }
        
        if(data.seats) {
            filter.AvailableSeats = {
                [Op.gte] : data.seats
            };
        }

        return filter;
    }

    constructor() {
        super(new FlightRepository());
    }

    async create(data) {
        try {
            if(!this.#areArrivalAndDepartureTimesValid(data.arrivalTime,data.departureTime)) {
                throw {error:"Wrong timings"};
            }

            const flight = await this.repository.create(data);
            return flight;
        } catch(error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async getAll(data) {
        try {
            const filter = this.#createFilterObject(data);
            const flights = await this.repository.getAll(filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

};

module.exports = FlightService;