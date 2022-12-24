const path = require('path');

const stylesHandler = 'style-loader';

const config = {
  entry: {
    'js/login.min': './public/src/js/login/index.js',
    'js/app.min': './public/src/js/app/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
