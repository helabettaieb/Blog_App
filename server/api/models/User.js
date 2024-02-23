const mongoose = require('mongoose');
const {Schema} = mongoose;

// create a new schema
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    jobTitle: String,
    company: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
});

//create a new model 
const User = mongoose.model('User', userSchema);

module.exports = User;
