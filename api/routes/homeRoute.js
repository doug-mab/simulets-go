const { Router } = require('express');
const { publicPath } = require('../config/paths');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
  res.redirect('/app');
});

router.get('/app', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

module.exports = router;
