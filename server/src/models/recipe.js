const mongoose = require('mongoose')
const { Schema } = mongoose

const recipeSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: [String],
    ingredients: [{
        quantity: { type: Number, required: true },
        unit: { type: String, required: true },
        name: { type: String, required: true }
    }],
    directions: [String],
    nutriInfo: {
        serving: { type: Number, required: true},
        yeild: String
    },
    time: {
        prepTime: Number,
        cookTime: Number
    },
    additionalTime: [{
        name: String,
        amount: Number
    }],
    notes: [{
        title: String,
        content: String
    }],
    owner: mongoose.SchemaTypes.ObjectId
})

const recipe = mongoose.model('Recipe', recipeSchema)

module.exports = recipe