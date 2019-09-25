const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');


const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/books', booksRouter);

//these two are originals
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     // next(createError(404));
//     res.status(404);
//     res.render('page-not-found');
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });



//these two taken from stack overflow
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err

    if (err.shouldRedirect) {
        res.redirect('error'); // Renders a myErrorPage.html for the user
    } else {
        res.status(err.statusCode).send(err.message); // If shouldRedirect is not defined in our error, sends our original err data
    }
});
// catch 404. 404 should be consider as a default behavior, not a system error.
app.use((req, res, next) => {
    res.status(404);
    res.render('page-not-found');
});



// app.listen(process.env.PORT, () => {
//     console.log(`app is listening on  port ${process.env.PORT}`);
// });
app.listen(3000, () => { });


