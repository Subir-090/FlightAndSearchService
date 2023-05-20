'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Flights',[
    {
      departureAirportId: '1',
      destinationAirportId: '2',
      airplaneId: '9',
      departureTime: '2023-02-23 16:00:00',
      arrivalTime: '2023-02-23 17:20:00',
      flightNumber: 'UK 820',
      AvailableSeats: 150,
      price: 2000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      departureAirportId: '1',
      destinationAirportId: '3',
      airplaneId: '10',
      departureTime: '2023-02-23 15:20:00',
      arrivalTime: '2023-02-23 17:20:00',
      flightNumber: 'US 860',
      AvailableSeats: 250,
      price: 4000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
