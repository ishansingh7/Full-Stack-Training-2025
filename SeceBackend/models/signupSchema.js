const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
  firstName: String,
  lastName: String, 
  userName: String,
  email: String,
  password: String,
});

const Signup = mongoose.model('Signup', signupSchema);
module.exports = Signup; 
