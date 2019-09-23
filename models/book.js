const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Book extends Sequelize.Model { }
    Book.init({
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        genre: Sequelize.STRING,
        year: Sequelize.DATEONLY,
    }, {

        sequelize
    });

    return Book;
};
