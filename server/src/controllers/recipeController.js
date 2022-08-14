const Recipe = require('../models/recipe')

const create = async (req, res, next) => {
    // remember to create function to add a comma to the end of needed strings
    // all fields were prepared/formatted at FE
    const {
        title,
        description,
        image,
        ingredients,
        directions,
        nutriInfo,
        time,
        additionalTime,
        notes,
        owner
    } = req.body

    try {
        const recipe = new Recipe({
            title,
            description,
            image,
            ingredients,
            directions,
            nutriInfo,
            time,
            additionalTime,
            notes,
            owner
        })
        await recipe.save()
        return res.status(200).json('Recipe has been created.')
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

const getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const findRecipe = await Recipe.findById(id).lean().exec()
        if (findRecipe) {
            return res.status(200).json(findRecipe)
        } else {
            return res.status(404).json({ message: "Recipe not found." })
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

const getAll = async (req, res, next) => {
    try {
        const recipes = await Recipe.find({}).lean().exec()
        return res.status(200).json(recipes)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

const updateById = async (req, res, next) => {
    const { id } = req.params
    const updatedRecipe = req.body

    try {
        await Recipe.findByIdAndUpdate(id, updatedRecipe, { runValidators: true })
        return res.status(200).json({ message: "Recipe has been updated." })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

const deleteById = async (req, res, next) => {
    const { id } = req.params
    try {
        await Recipe.findByIdAndDelete(id)
        return res.status(200).json({ message: "Recipe has been deleted." })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

module.exports = { create, getById, getAll, updateById, deleteById }