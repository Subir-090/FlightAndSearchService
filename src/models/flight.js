'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane,{
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'
      });
      this.belongsTo(models.Airport,{
        foreignKey: 'departureAirportId',
        onDelete: 'CASCADE',
        as: 'departureFlights'
      });
      this.belongsTo(models.Airport,{
        foreignKey: 'destinationAirportId',
        onDelete: 'CASCADE',
        as: 'arrivalFlights'
      })
    }
  }
  Flight.init({
    departureAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airports',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    destinationAirportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airports',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Airplanes',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AvailableSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};