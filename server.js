require('dotenv').config()

const express = require('express')

const app = express()
const PORT = 3080
const { createEngine } = require('jsx-view-engine')
const Pokemon = require('./models/pokemonModel')

const pokemonRoute = require('./route/pokemonRoute')

const connectDB = require('./config/db')

connectDB()

const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))
app.use(express.static('public'))


app.set('view engine', 'jsx')
app.engine('jsx', createEngine())



app.get('/', (req, res) => {
    res.send('<h2>Welcome to the Pokemon App!</h2><br/><a href=/pokemon>View Pokemon</a>')
})

app.use('/pokemon', pokemonRoute)


// app.get('/pokemon/:id',(req, res) => {
//     res.send(req.params.id)
// })

// app.get('/pokemon', (req, res) => {
//     res.render('views/Index')
// })

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})