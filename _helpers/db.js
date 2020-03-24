
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
dotenv.config({ path: envFile })

mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log(`MONGO CONNECTION ERROR: ${err}`)  
      throw err;
    } else {
       console.log(`MONGO is connected`);
    }
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};