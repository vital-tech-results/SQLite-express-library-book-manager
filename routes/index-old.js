const express = require('express');
const router = express.Router();

const db = require('../models');



router.get('/', (req, res) => {
    db.Book.findAll()
        .then(books => {
            res.render('index', {
                title: 'Sequelize: Express Example'

            });
        });

});


module.exports = router;