const logger = require('../services/logger');

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS || null,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    uri: process.env.URI_STRING || null,
    logging: (msg) => logger.debug(msg),
    dialect: 'postgres',
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASS || null,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    uri: process.env.URI_STRING || null,
    logging: (msg) => logger.debug(msg),
    dialect: 'postgres',
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASS || null,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    uri: process.env.URI_STRING || null,
    logging: false,
    dialect: 'postgres',
  },
};
