const express = require('express')
const app = express()
require('dotenv').config()
const db = require('./config/db')
const port = 3000

app.use(express.json())

db.connect()

const userRouter = require('./routes/user')
const reviewRouter = require('./routes/review')
const recipeRouter = require('./routes/recipe')

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/user', userRouter)
app.use('/review', reviewRouter)
app.use('/recipe', recipeRouter)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})