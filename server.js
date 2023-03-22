const express = require('express')

const app = express()
const PORT = 3080
const { createEngine } = require('jsx-view-engine')

// const pokemon = require('./models/pokemon')

const pokemonRoute = require('./route/pokemonRoute')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.get('/', (req, res) => {
    res.send('<h2>Welcome to the Pokemon App!</h2><br/><a href=/pokemon>View Pokemon</a>')
})

app.use('/pokemon', pokemonRoute)

// app.use('/pokemon', pokemonRoute)

// app.get('/pokemon', (req, res) => {
//     res.render('views/Index')
// })

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})