const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const SalesItem = db.define(
  "sales_item",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
      references: {
        model: "products",
        key: "id",
      },
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
      references: {
        model: "sales",
        key: "id",
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    modelName: "SaleItem",
    tableName: "sales_item",
  }
);

const Sales = db.define(
  "sales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.STRING(9, 4),
      allowNull: false,
      defaultValue: 0.0,
    },
    discount: {
      type: DataTypes.STRING(9, 4),
      allowNull: true,
      defaultValue: 0.0,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
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
  },
  {
    modelName: "Sale",
    tableName: "sales",
  }
);

module.exports = { Sales, SalesItem };
