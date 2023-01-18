const { Sequelize, Dataypes } = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {},
  {
    modelName: "User",
    tableName: "users",
  }
);

module.exports = { User };
