const express = require('express');
const app = express();

const db = require('./models/index-o');
const Book = require('./models/book');



// const bodyParser = require('body-parser');
// const routes = require('./routes');


// app.use(routes);
// app.set('view engine', 'pug');

//set a static route to serve static files
// app.use('/static', express.static('public'));



(async () => {
    await db.sequelize.sync();

    try {
        const book = await Book.create({
            title: 'Dominick',
            author: 'DJ'
        });
    } catch (error) {
        console.error('there was sept 22 error: ', error);
    }
})();
/*
(async () => {
    // Sync all tables
    await db.sequelize.sync();
 
    try {
        // const bookInstances = await Promise.all([
        //     Book.create({
        //         title: 'Winnie the Pooh 123',
        //         author: 'A.A. Milne',
        //         genre: 'Children',
        //         year: 1924,
        //     }),
 
        // ]);
 
        const ok1 = await Book.findByPk(26);
        await ok1.destroy();
 
        // Find and log all movies
        const books = await Book.findAll();
        console.log(books.map(book => book.toJSON()));
 
        // const booksJSON = bookInstances.map(book => book.toJSON());
        // console.log(booksJSON);
 
 
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
});
*/




app.listen(3000, function () {
    db.sequelize.sync();
    console.log('the library app is listening on port 3000');
});