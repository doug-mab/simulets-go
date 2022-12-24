const path = require('path');
const fs = require('fs');
const logger = require('../services/logger');
let routes = {};

logger.debug('Rotas em uso - [');

fs.readdirSync(__dirname)
  .filter(
    (file) => file !== path.basename(__filename) && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const [name] = file.split('.');
    routes[name] = require(path.join(__dirname, file));

    logger.debug(file, true);
  });

logger.debug(']');

module.exports = routes;
