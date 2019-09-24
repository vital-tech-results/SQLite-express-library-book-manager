const express = require('express');
const router = express.Router();
const app = express();
const models = require('../models');
const bodyParser = require('body-parser');

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


app.post('/new', (req, res) => {
    models.Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year
    })
        .then((book) => {
            res.json(book);
            const title = req.body.title;
            console.log("post received horray", title);
            res.redirect('new-books');
        });
});

// get book by primary key (pk) and display edit form
app.get('/:id', (req, res) => {
    const id = req.params.id;
    models.Book.findByPk(id)
        .then((book) => {
            res.render('update-book', {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                year: book.year
            });
        });
});

// update book details
/*
app.put('/:id', (req, res, next) => {
    res.render('update-book');
    models.Book.update(
        { title: req.body.title },
        { returning: true, where: { id: req.params.id } }
    )
        .then(function ([rowsUpdate, [updatedBook]]) {
            res.json(updatedBook)
        })
        .catch(next);
});
*/
app.put('/:id', function (req, res, next) {
    models.Book.update(
        {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            year: req.body.year
        },
        { where: { id: id } },
        { fields: ['title', 'author', 'genre', 'year'] }
    )
        .then((book) => {
            res.render('update-book', {
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre,
                year: book.year
            });
        });
});

module.exports = app;