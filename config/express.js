const express = require("express")
      morgan = require("morgan");


/**
* @desc - initialize other application configurations
*/
module.exports.initializeAppConfigs = (app) => {
  app.use(morgan("dev")); // in express we can register middlewares using app.use() function.
}

/**
* @desc - initialize the all sever routes (REST end points);
*/
module.exports.initializeServerRoutes = (app) => {
  require("../routes/user.routes")(app);
}

/**
* @desc - initialize the application
*/
module.exports.init = () => {
  const app = express();

  this.initializeAppConfigs(app);
  this.initializeServerRoutes(app);

  return app;
}