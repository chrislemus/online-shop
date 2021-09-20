const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  const filePath = path.join(__dirname, '../', 'views', 'add-product.html');
  res.sendFile(filePath);
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
