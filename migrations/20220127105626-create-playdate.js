"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("playdates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("playdates");
  },
};
