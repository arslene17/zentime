// require mongoose
const mongoose = require('mongoose');

// get schema from mongoose
const Schema = mongoose.Schema;

// create user schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true, collection: 'users' }
)

// export the user model
module.exports = User = mongoose.model('User', userSchema);