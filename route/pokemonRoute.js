const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const pokemonController = require('../controller/pokemonController')

router.get('/', pokemonController.index)

router.get('/new', pokemonController.new)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:index', pokemonController.show)

router.post('/', pokemonController.create)

module.exports = router