const pino = require('pino');

const logger = pino({
  level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

module.exports = logger;
