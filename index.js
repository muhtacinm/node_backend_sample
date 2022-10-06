const express = require('express')
const cors = require('cors')

const db = require ('./db')
const router = require('./routes')

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection failed...'))

app.use('/api', router)

app.listen(port, () => console.log(`Server running on ${port}`))