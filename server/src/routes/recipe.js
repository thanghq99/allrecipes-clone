const express = require('express')
const router = express.Router()

const recipeController = require('../controllers/recipeController')

router.post('/', recipeController.create)
router.get('/:id', recipeController.getById)
router.get('/', recipeController.getAll)
router.put('/:id', recipeController.updateById)
router.delete('/:id', recipeController.deleteById)

module.exports = router