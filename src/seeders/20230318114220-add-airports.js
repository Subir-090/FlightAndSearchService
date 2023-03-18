'use strict';

const { query } = require('express');

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
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Indira Gandhi Airport',
      cityId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      address: 'Delhi'
    },
    {
      name: 'Maharaja Bir Bikram Airport',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      address: 'Agartala'
    },
    {
      name: 'Kempegowda International Airport	',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      address: 'Bangalore'
    },
    {
      name: 'Jakkur Aerodrome',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      address: 'Bangalore'
    },
    {
      name: 'Netaji Subhas Chandra Bose International Airport',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      address: 'Kolkata'
    },
    {
      name: 'Rajiv Gandhi International Airport',
      cityId: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      address: 'Telangana'
    }
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
