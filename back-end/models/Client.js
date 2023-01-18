const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const Client = db.define(
  "client",
  {},
  {
    modelName: "Client",
    tableName: "clients",
  }
);

module.exports = { Client };
