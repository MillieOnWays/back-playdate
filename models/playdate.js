"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class playdate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      playdate.belongsTo(models.user);
    }
  }
  playdate.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      image: DataTypes.STRING,
      date: { type: DataTypes.DATEONLY, allowNull: false },
      startTime: { type: DataTypes.DATE, allowNull: false },
      endTime: DataTypes.DATE,
      description: { type: DataTypes.TEXT, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      tag: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "playdate",
    }
  );
  return playdate;
};
