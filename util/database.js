const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-shop-store',
  'root',
  process.env.MYSQL_DB_PASSWORD,
  { dialect: 'mysql', host: 'localhost' }
);

module.exports = sequelize;
