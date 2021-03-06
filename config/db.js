const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//Global, fixed deprecated
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

const connectDB = async () => {
  try {
    mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with fail
    process.exit(1);
  }
};

module.exports = connectDB;
