const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Client = db.define(
  "client",
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
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
  },
  {
    modelName: "Client",
    tableName: "clients",
  }
);

const ClientStore = db.define("client_store", {
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
    references: {
      model: "clients",
      key: "id",
    },
  },
  store_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
    references: {
      model: "stores",
      key: "id",
    },
  },
});

module.exports = { Client, ClientStore };
