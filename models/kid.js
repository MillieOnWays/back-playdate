"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kid.belongsTo(models.user);
      kid.hasMany(models.interest);
    }
  }
  kid.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      avatar: DataTypes.STRING,
      birthDate: { type: DataTypes.DATEONLY, allowNull: false },
      gender: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "kid",
    }
  );
  return kid;
};
