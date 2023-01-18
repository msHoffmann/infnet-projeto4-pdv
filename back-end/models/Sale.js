const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const SalesItem = db.define(
  "sales_item",
  {},
  {
    modelName: "SaleItem",
    tableName: "sales_item",
  }
);

const Sales = db.define(
  "sales",
  {},
  {
    modelName: "Sale",
    tableName: "sales",
  }
);

module.exports = { Sales, SalesItem };
