const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    greeting: String,
    isAdmin: Boolean
})

const user = mongoose.model('User', userSchema)

module.exports = user