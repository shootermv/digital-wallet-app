const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const request = require('supertest')

const app = require('../app')

describe('Users Api', () => {
    afterEach(async () => {
        await User.deleteMany();
    });

    test("Should login", async done => {

        const user = new User({
            username: 'Zell',
            password: '123123',
            firstName:  'Adam',
            lastName:  'Petrov',        
        });
        user.hash = bcrypt.hashSync('123123', 10);
        await user.save();

        const res = await request(app)
          .post("/api/users/login")
          .send({
            username: "Zell",
            password: "123123"
        });

        
        expect(res.body.firstName).toBe('Adam');

        done();
    });

});