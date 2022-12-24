const logger = require('./services/logger');
const app = require('./app.js');
const appEmitter = require('./services/event');

const port = process.env.PORT || 3000;

appEmitter.on('db-connect', () => app.listen(port, () => {
  logger.info(`Servidor rodando na porta ${port}...`);
}));
