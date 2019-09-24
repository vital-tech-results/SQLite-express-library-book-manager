const express = require('express');
const router = express.Router();
const app = express();
var models = require('../models');
const bodyParser = require('body-parser');

/** ADAPTED FROM
 * https://sequelize.readthedocs.io/en/1.7.0/articles/express/ 
 * https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465
 * */
app.get('/', (req, res) => {
    res.render('new-book');
});


app.post('/', (req, res) => {
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
        });
});


module.exports = app;

/** create book
 *
 * app.post('/users', function (req, res) {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    bio: req.body.bio,
    email: req.body.email,
  })
    .then(function (user) {
      res.json(user);
    });
});
 *
 * const newBook = (newBook) => {
        if (req.body.title && req.body.author) {
            response.send(users);
            console.log('ok');
        } else {
            response.status(400).send('Error in insert new record');
            // const err = new Error('All fields required');
            // err.status = 400;
            // next(err);
        }
    };
 *
 * const createBook = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year
    }
    models.Book.create({ createBook });
 */