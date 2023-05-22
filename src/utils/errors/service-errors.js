const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
    constructor(error) {
        super();
        this.name = 'ServiceError';
        let explaination = "";

        for(const err of error) {
            explaination.push(err.message);
        }

        this.message = 'Service layer failed';
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
};

module.exports = ServiceError;