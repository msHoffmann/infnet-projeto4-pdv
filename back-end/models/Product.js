const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ean: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(9, 4),
      allowNull: false,
    },
    promo_price: {
      type: DataTypes.STRING(9, 4),
      allowNull: true,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
      references: {
        model: "stores",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    modelName: "Product",
    tableName: "products",
  }
);

module.exports = { Product };
