const express = require('express');
const router = express.Router();
const RequestQ = require('express-request-queue');

const q = new RequestQ();
const userService = require('./user.service');

// routes
router.post('/login', authenticate);
router.get('/current', getCurrent);
router.get('/balance', getBalance);
router.post('/transfer', q.run( transfer));

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getBalance(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => res.json(user.balance))
        .catch(err => next(err));
}

async function transfer(req, res, next) {
    userService.transfer(req.user.sub, req.body.sum, req.body.currency, req.body.toId)
        .then(result => res.json(result))
        .catch(err => next(err));
}