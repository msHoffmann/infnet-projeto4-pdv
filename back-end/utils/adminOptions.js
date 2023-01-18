const { Store } = require("../models/Store");
const { Role } = require("../models/Role");
const { User } = require("../models/User");
const { Client, ClientStore } = require("../models/Client");
const { Category } = require("../models/Category");
const { Product } = require("../models/Product");
const { Sales, SalesItem } = require("../models/Sale");
const bcrypt = require("bcryptjs");

const generateResource = (model, properties, actions) => {
  return {
    resource: model,
    options: {
      properties: {
        ...properties,
      },
      actions: actions,
    },
  };
};

const clearCpfCnpj = (cpfCnpj) => {
  return cpfCnpj.replace(/[^\w\s]/gi, "");
  // regex remove special character
};

const generateAdminOptions = () => {
  return {
    resources: [
      generateResource(
        Store,
        {},
        {
          new: {
            before: (request) => {
              request.payload.cnpj = clearCpfCnpj(request.payload.cnpj);
              return request;
            },
          },
          edit: {
            before: (request) => {
              // request.payload.cnpj = cleanCnpj(request.payload.cnpj);
              return request;
            },
          },
        }
      ),
      generateResource(Role),
      generateResource(
        User,
        {
          password: {
            type: "password",
          },
        },
        {
          new: {
            before: (request) => {
              request.payload.password = bcrypt.hashSync(
                request.payload.password,
                10
              );
              return request;
            },
          },
          edit: {
            before: async function (request) {
              if (request.payload.password) {
                if (
                  request.payload.password.indexOf("$2b$10") === -1 &&
                  request.payload.password.length < 40
                ) {
                  request.payload.password = await bcrypt.hash(
                    request.payload.password,
                    10
                  );
                }
              }
            },
          },
        }
      ),
      generateResource(
        Client,
        {},
        {
          new: {
            before: (request) => {
              request.payload.cpf = clearCpfCnpj(request.payload.cpf);
              return request;
            },
          },
        }
      ),
      generateResource(ClientStore),
      generateResource(Sales),
      generateResource(SalesItem),
      generateResource(Category),
      generateResource(Product),
    ],
  };
};

module.exports = { generateAdminOptions };
