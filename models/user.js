const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class User extends Sequelize.Model { }
  User.init({
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    bio: Sequelize.STRING,
  }, {

    sequelize
  });

  return User;
};