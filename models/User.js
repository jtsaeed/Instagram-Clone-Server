const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
    avatarPath: String
});

module.exports = mongoose.model('Users', UserSchema);