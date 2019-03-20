require('module-alias/register');

const fs = require('fs');

module.exports = (app) => {
  // require all API endpoints
  fs.readdirSync(`${__dirname}/api/`).forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};

//This export handles gathering all of the routes and exporting them. 