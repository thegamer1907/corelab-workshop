var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    balance : {
        type: Number,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
