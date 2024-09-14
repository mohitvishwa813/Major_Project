const mongoose = require('mongoose');

const OrganizerSchema = new mongoose.Schema({ 
    name: { type: String, required: true }, // Correctly defined
    email: { type: String, required: true, unique: true }, // Correctly defined
    password: { type: String, required: true }, // Correctly defined
    role: { type: String, enum: ['organizer'], default: 'organizer' } // Enforcing valid roles
}); 

const Organizer = mongoose.model('Organizer', OrganizerSchema); 
module.exports = Organizer; // Correct export statement