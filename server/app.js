const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path');
const { staticPath } = require('./config/paths');
require('./models');

class App {
  constructor() {
    this.app = express();
    this.routes();
    this.middleware();
  }

  middleware() {
    this.app.use(bodyParser.json());
    this.app.use(express.static(path.resolve(staticPath)));
  }

  routes() {
    this.app.use('/', router.homeRoute);
  }
}

module.exports = new App().app;
