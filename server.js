const app = require('./app');

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});