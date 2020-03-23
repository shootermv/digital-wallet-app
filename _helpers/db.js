
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
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
    User: require('../users/user.model')//,
    //Task: require('../tasks/task.model'),
};