const { Router } = require('express');
const { staticPath } = require('../config/paths');
const path = require('path');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(staticPath, 'index.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.resolve(staticPath, 'login.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.resolve(staticPath, 'register.html'));
});

module.exports = router;
