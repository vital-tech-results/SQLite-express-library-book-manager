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
    res.render('update-book');
});


app.put('/:id', (req, res, next) => {
    models.Book.update(
        { title: req.body.title },
        { returning: true, where: { id: req.params.bookId } }
    )
        .then(function ([rowsUpdate, [updatedBook]]) {
            res.json(updatedBook)
        })
        .catch(next)
});


module.exports = app;
