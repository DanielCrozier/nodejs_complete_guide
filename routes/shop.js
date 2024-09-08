const path = require("path");

const express = require('express');

const rootDir = require('../util/path');
const adminData = require(path.join(__dirname, 'admin'));

const router = express.Router();

router.get('/', (req, res) => {
  const products = adminData.products
  res.render('shop', {
    prods: products,
    docTitle: 'Shop',
    pageTitle: 'Shop',
    path: '/'
  });
});

module.exports = router;
