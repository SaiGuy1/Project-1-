const mongoose = require('mongoose');

new userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required.'],
        minlength: [2, 'First Name must be at least 2 characters'],
        maxlength: [25, 'First Name cannot be longer than 25 characters'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required.'],
        minlength: [2, 'Last Name must be at least 2 characters'],
        maxlength: [25, 'Last Name cannot be longer than 25 characters'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [7, 'Password must be at least 7 characters'],
        maxlength: [25, 'Password cannot be longer than 25 characters'],
        trim: true,
    },
}, {timestamp: true})

const User = mongoose.model('User', userSchema);

module.exports = User;