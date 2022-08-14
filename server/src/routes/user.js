const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/', userController.create)
router.get('/:id', userController.getById)
router.get('/', userController.getAll)
router.put('/:id', userController.updateById)
router.delete('/:id', userController.deleteById)

module.exports = router