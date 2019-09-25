const express = require('express');
const router = express.Router();
const app = express();
const models = require('../models');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

/** ADAPTED FROM
 * https://sequelize.readthedocs.io/en/1.7.0/articles/express/ 
 * https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465
 * */
// get list of ALL books currently in database
app.get('/', (req, res) => {
    models.Book.findAll({}
    )
        .then(books => {
            res.render('index', {
                title: "This is a list of all books currently in the library database",
                books: books
            });
        });
});

// display the "ADD new book" form
app.get('/new', (req, res) => {
    res.render('new-book');
});


// POST execute 'add new book' form
app.post('/new', (req, res) => {
    models.Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year
    })
        .then((book) => {
            res.redirect('/');
        })
        .catch((error) => {
            if (error.name === "SequelizeValidationError") {
                const book = models.Book.create(req.body);
                book.id = req.params.id;
                res.render('new-book', {
                    book: book,
                    id: book.id,
                    title: req.body.title,
                    author: req.body.author,
                    genre: req.body.genre,
                    year: req.body.year,
                    errors: error.errors,
                });
            } else {
                throw error;
            }
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
        })
        .catch(err => res.render('error'));
});

// update book details
app.put('/:id', function (req, res, next) {
    models.Book.findByPk(req.params.id);
    models.Book.update(
        {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            year: req.body.year
        },
        { where: { id: req.params.id } },
        { fields: ['title', 'author', 'genre', 'year'] }
    )
        .then(book => {
            res.redirect('/');
        })
        .catch((error) => {
            if (error.name === "SequelizeValidationError") {
                const book = models.Book.build(req.body);
                book.id = req.params.id;
                res.render('update-book', {
                    book: book,
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    genre: book.genre,
                    year: book.year,
                    errors: error.errors,
                });
            } else {
                throw error;
            }
        });
});

// delete book from database
app.delete('/:id/delete', (req, res, next) => {
    models.Book.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(book => {
            res.redirect('/');
        });
});
module.exports = app;