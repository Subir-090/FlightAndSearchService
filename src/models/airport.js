'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City,{
        foreignKey: {
          name: 'cityId',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onDelete: 'CASCADE',
        targetKey: 'id',
      });
      
      this.hasMany(models.Flight,{
        foreignKey: 'departureAirportId',
        onDelete: 'CASCADE',
        as: 'departureFlights'
      });

      this.hasMany(models.Flight,{
        foreignKey: 'destinationAirportId',
        onDelete: 'CASCADE',
        as: 'arrivalFlights'
      });

    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};