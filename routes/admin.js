const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  const filePath = path.join(rootDir, 'views', 'add-product.html');
  res.sendFile(filePath);
});

router.post('/add-product', (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect('/');
});

module.exports = { routes: router, products };
