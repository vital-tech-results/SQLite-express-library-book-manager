
// adapted from https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465
'use strict';
module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "title"',
                },
                notEmpty: {
                    msg: 'Please provide a value for "title"',
                },
            },
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "author"',
                },
                notEmpty: {
                    msg: 'Please provide a value for "author"',
                },
            },
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "genre"',
                },
                notEmpty: {
                    msg: 'Please provide a value for "genre"',
                },
            },
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "year"',
                },
                notEmpty: {
                    msg: 'Please provide a value for "year"',
                },
            },
        }
    }, {
        // SEE HERE FOR MORE MODEL OPTIONS: https://teamtreehouse.com/library/using-sql-orms-with-nodejs/defining-models/use-options-to-adjust-models

        sequelize
    });
    return Book;
};

