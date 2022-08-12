const express = require('express')
const router = express.Router()

const reviewController = require('../controllers/reviewController')

router.post('/', reviewController.create)
router.get('/:id', reviewController.getById)
router.get('/', reviewController.getAll)
router.put('/:id', reviewController.updateById)
router.delete('/:id', reviewController.deleteById)

module.exports = router