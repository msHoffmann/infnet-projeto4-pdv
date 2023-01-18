const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const Product = db.define(
  "product",
  {},
  {
    modelName: "Product",
    tableName: "products",
  }
);

module.exports = { Product };
