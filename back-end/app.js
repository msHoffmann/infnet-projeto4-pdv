// Requires
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
const express = require("express");
const { generateAdminOptions } = require("./utils/adminOptions.js");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const bcrypt = require("bcryptjs");

// Database
const db = require("./db.js");

// Models
const { User } = require("./models/User.js");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, NODE_ENV } =
  process.env;

const PORT = 3001;
const ROOT_DIR = __dirname;

const mysqlStore = require("express-mysql-session")(session);

const sessionStore = new mysqlStore({
  connection: 10,
  password: DB_PASSWORD,
  user: DB_USER,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  createDatabaseTable: true,
});

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const start = async () => {
  const app = express();
  const adminOptions = generateAdminOptions(ROOT_DIR);
  const admin = new AdminJS(adminOptions);
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email, password) => {
        const user = await User.findOne({
          where: {
            email,
          },
        });
        if (user && user.role_id === 3) {
          let verify = await bcrypt.compare(password, user.password);
          if (verify) return user;
        }
        return null;
      },
      cookieName: "pdv-admin",
      cookiePassword: "kARMmt4AoS3*vk5^2uK8T*UeCypn8UVq",
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUnitialized: true,
      secret: "psdf@z52^V@aQRvK78&7IoW6bi$cC8n5",
      cookie: {
        httpOnly: NODE_ENV === "development",
        secure: NODE_ENV === "production",
      },
      name: "pdv-admin",
    }
  );

  app.use(cors());
  app.use(express.json());
  app.use(admin.options.rootPath, adminRouter);

  db.sync(() => console.log("DB is working!"));
  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
