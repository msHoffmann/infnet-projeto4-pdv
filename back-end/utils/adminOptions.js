const { Store } = require("../models/Store.js");
const { Role } = require("../models/Role.js");
const { User } = require("../models/User.js");
const { Client, ClientStore } = require("../models/Client.js");
const { Category } = require("../models/Category.js");
const { Product } = require("../models/Product.js");
const { Sales, SalesItem } = require("../models/Sale.js");
const bcrypt = require("bcryptjs");

const Email = require("../utils/Email");

require("dotenv").config();

const { URL_FRONT } = process.env;
console.log(URL_FRONT);
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

const cleanCpfCnpj = (cpfCnpj) => {
  return cpfCnpj.replace(/[^\w\s]/gi, "");
  // regex remove special character
};

const generateAdminOptions = (root_dir) => {
  return {
    resources: [
      generateResource(
        Store,
        {},
        {
          new: {
            before: (request) => {
              request.payload.cnpj = cleanCpfCnpj(request.payload.cnpj);
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
            before: async (request) => {
              const { role_id, email, password } = request.payload;
              if (role_id == 4 || role_id == 5) {
                const emailUtil = new Email(root_dir);
                await emailUtil.sendEmail(
                  email,
                  "Dados de Acesso ao ADMINJS",
                  "password-email",
                  {
                    email,
                    password,
                    url: URL_FRONT,
                  }
                );
              }
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
              return request;
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
              request.payload.cpf = cleanCpfCnpj(request.payload.cpf);
              return request;
            },
          },
        }
      ),
      generateResource(ClientStore),
      generateResource(Category),
      generateResource(Product),
      generateResource(Sales),
      generateResource(SalesItem),
    ],
  };
};

module.exports = {
  generateAdminOptions,
};
