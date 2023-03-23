const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
    name: { 
        type: String, required: true
    },
    type: {
        type: String, required: true
    },
    image: {
        type: Boolean, default: true
    }
})
    

const Pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = Pokemon