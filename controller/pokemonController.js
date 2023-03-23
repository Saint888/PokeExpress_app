const pokemon = require('../models/pokemon')
const Pokemon = require('../models/pokemonModel')

module.exports.index = (req, res) => {
    res.render('pokemons/Index', { pokemon })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    res.render('pokemons/Show', { pokemon: pokemon[req.params.index] })
}

module.exports.new = async (req, res) => {
    res.render('pokemons/New')
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        await Pokemon.create(req.body)
        res.redirect('/pokemon')
    } catch(err) {
        res.send(err.message)
    }
}


// module.exports.index = (req, res) =>{
//     res.render('pokemons/Index')
// }

// module.exports = { index, show}