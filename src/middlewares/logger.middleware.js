const logger = require("../config/logger/factory");

const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.info(
    `${req.method}en ${req.url} - ${new Date().toLocaleDateString()}`
  );

  next();
};

module.exports = addLogger;
