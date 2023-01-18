const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const Role = db.define(
  "role",
  {},
  {
    modelName: "Role",
    tableName: "roles",
  }
);

module.exports = { Role };
