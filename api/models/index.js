const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const appEmitter = require('../services/event');
const logger = require('../services/logger');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/database.js`)[env];
const db = {};

let sequelize;
if (config.uri) {
  sequelize = new Sequelize(config.uri, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

(async () => {
  try {
    await sequelize.authenticate();
    logger.info('Conectado ao banco de dados.');
    appEmitter.emit('db-connect');
  } catch (err) {
    logger.error('Falha ao conectar ao banco de dados: ' + err.message);
  }
})();

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    // userModels.js
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
