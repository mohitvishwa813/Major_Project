const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Correctly defined
    email: { type: String, required: true, unique: true }, // Correctly defined
    password: { type: String, required: true }, // Correctly defined
   
    role: { type: String, enum: ['user'], default: 'user' } // Enforcing valid roles
});

const User = mongoose.model('User', UserSchema); // Collection name --> User
module.exports = User; // Correct export statement