const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const product = new Product(title, price, imageUrl, description);
  product
    .save()
    .then(() => res.redirect('/admin/products'))
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) return res.redirect('/');
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: true,
        product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const { productId, title, price, imageUrl, description } = req.body;
  const product = new Product(title, price, imageUrl, description, productId);
  product
    .save()
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
    .catch((err) => console.log(err));
};

// exports.postDeleteProduct = (req, res, next) => {
//   Product.findByPk(req.body.productId)
//     .then((product) => product.destroy())
//     .then(() => res.redirect('/admin/products'))
//     .catch((err) => console.log(err));
// };
