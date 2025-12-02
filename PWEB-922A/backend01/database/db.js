const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend_db', 'regularUser', 'regularUserPass123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true,
  port: 3307,
});

module.exports = sequelize;
