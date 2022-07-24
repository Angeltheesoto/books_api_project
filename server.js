// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
 res.send('This is books api project.')
})

// LISTEN
app.listen(PORT, () => {
 console.log('Showing port at http://localhost:', PORT)
})