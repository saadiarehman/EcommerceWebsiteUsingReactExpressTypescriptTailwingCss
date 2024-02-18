const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class AddProducts extends Model {}

AddProducts.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    additionalInformation: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true,
    sequelize,
    timestamps: true,
    modelName: "AddProducts",
  }
);

module.exports = AddProducts;
