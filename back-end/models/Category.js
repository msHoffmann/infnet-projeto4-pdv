const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const Category = db.define(
  "category",
  {},
  {
    modelName: "Category",
    tableName: "categories",
  }
);

module.exports = { Category };
