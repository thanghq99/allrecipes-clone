const mongoose = require('mongoose')
const { Schema } = mongoose

const reviewSchema = Schema({
    rate: Number,
    content: String,
    reviewer: mongoose.SchemaTypes.ObjectId
})

const review = mongoose.model('Review', reviewSchema)

module.exports = review