const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const routes = require('./routes');


const db = require('./models');
const sequelize = require('./models').sequelize;
const  User  = db.User;
const  Book  = db.Book;


app.use(routes);
app.set('view engine', 'pug');

// set a static route to serve static files
app.use('/static', express.static('public'));


// Test DB
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();

/*
(async () => {
await db.sequelize.sync();

try {
    const bookInstances = await Promise.all([
        User.create({
            first_name: 'four user',
            last_name: 'last two',
            bio: 'two bio here',
        }),

        Book.create({
            title: 'sept 22 book',
            author: 'Me',
            genre: 'Children',
            year: 1924,
        }),
    ]);

    const moviesJSON = bookInstances.map(book => book.toJSON());
    console.log(moviesJSON);

} catch (error) {
    console.error('Error connecting to the database: ', error);

}
});

*/
app.listen(3000, () => {
    db.sequelize.sync();
    console.log('the library app is listening on port 3000');
})