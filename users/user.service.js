const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getById,
    create,
    transfer
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, process.env.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function transfer(fromId, sum, currency, toId) {
   const fromUser = await User.findById(fromId).select('-hash');
   const toUser = await User.findById(toId).select('-hash');
   if (fromUser.balance.get(currency) < sum) {
       throw new Error('You Cannot transfer more money than you have')
   }
   if (!toUser) {
       throw new Error('User you trying to transfer cannot be found')
   }
   fromUser.balance.set(currency, fromUser.balance.get(currency) - sum);
   toUser.balance.set(currency, toUser.balance.get(currency) + sum);
   await fromUser.save();
   await toUser.save();
   return {succcess: true};
}

async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
    return user;
}