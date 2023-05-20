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
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber: 'Airbus 320',
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Boeing 737',
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Boeing 777',
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Hindustan 228',
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber: 'Cessna Caravan 208B',
      capacity: 150,
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
