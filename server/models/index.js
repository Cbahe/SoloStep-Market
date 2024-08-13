const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const shoe = sequelize.define("shoe", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  size: Sequelize.FLOAT,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Shoe,
};
