const pokemon = require('../models/pokemon')

function index(req, res) {
    res.render('pokemons/Index', { pokemon })
}

// Those anonymous callback functions now have names: "index" and "show"
function show(req, res) {
    res.render('pokemons/Show', { pokemon: pokemon[req.params.index] })
}

// module.exports.index = (req, res) =>{
//     res.render('pokemons/Index')
// }

module.exports = { index, show }