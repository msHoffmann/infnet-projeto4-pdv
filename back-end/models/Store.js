const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const Store = db.define(
  "store",
  {},
  {
    modelName: "Store",
    tableName: "stores",
  }
);

module.exports = { Store };
