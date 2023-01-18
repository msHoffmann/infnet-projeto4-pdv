const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
const express = require("express");
const db = require("./db");
const { generateAdminOptions } = require("./utils/adminOptions");

const PORT = 3000;

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const start = async () => {
  const app = express();

  const adminOptions = generateAdminOptions;

  const admin = new AdminJS({});

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  db.sync(() => console.log("BD funcionando!"));
  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
