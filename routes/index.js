const express = require('express');
const router = express.Router();

const db = require('../db/models/book');

// router.use(bodyParser.json());

router.get('/', (req, res) => {

    res.render('index', {
        title: 'Sequelize: Express Example'
    });
});


module.exports = router;