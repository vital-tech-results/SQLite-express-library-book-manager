const express = require('express');
const router = express.Router();
const app = express();
var models = require('../models');

/** ADAPTED FROM
 * https://sequelize.readthedocs.io/en/1.7.0/articles/express/ 
 * https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465
 * */
app.get('/', (req, res) => {
    models.Book.findAll()
        .then(books => {
            res.render('index', {
                title: "This is a list of all books currently in the library database",
                books: books
            });
        });
});

app.get('/new', (req, res) => {
    res.render('new-book');
});

module.exports = app;