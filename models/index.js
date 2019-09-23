const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'library.db',
});


const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Book = require('./book')(sequelize);
// db.models.User = require('./user')(sequelize);

module.exports = db;