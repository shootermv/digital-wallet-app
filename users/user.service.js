const config = require('config.json');
const jwt = require('jsonwebtoken');



module.exports = {
    authenticate,
    getById
};

async function authenticate({ username, password }) {
    
    if (username === 'admin' && password === 'admin') {
        const user = {id: 1, name: 'Admin', lname: 'Adminovich'};
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...user,
            token
        };
    }  else {
        return null;
    }
}


async function getById(id) {
    return await  {id: 1, name: 'Admin', lname: 'Adminovich'};//User.findById(id).select('-hash');
}
