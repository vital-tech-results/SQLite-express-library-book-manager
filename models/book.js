
// adapted from https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465
'use strict';
module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        year: DataTypes.INTEGER
    }, {
        // SEE HERE FOR MORE MODEL OPTIONS: https://teamtreehouse.com/library/using-sql-orms-with-nodejs/defining-models/use-options-to-adjust-models
        sequelize
    });
    return Book;
};

