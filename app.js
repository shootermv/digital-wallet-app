require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const Seeder = require('./_helpers/seed/Seeder');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/api/users', require('./users/users.controller'));

app.use(errorHandler);// global error handler

// seeding stuff
if (process.env.SEED === 'true') {
    const seed = new Seeder();
    seed.seedDB()
}

// export
module.exports = app;