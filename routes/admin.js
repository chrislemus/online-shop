const express = require('express');
const { render } = require('pug');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product');
});

router.post('/add-product', (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect('/');
});

module.exports = { routes: router, products };
