const { category } = require("../models/Category");

const generateResource = (model) => {
  return model;
};

const generateAdminOptions = () => {
  return {
    resources: [
      // generateResource(category)
    ],
  };
};

module.exports = { generateAdminOptions };
