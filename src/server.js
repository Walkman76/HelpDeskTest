const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

console.log(`Node.js ${process.version}`)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: "Rahti2 node 0.2.5 from main" })
})

const botRouter = require('./routes/bot')
app.use('/bot', botRouter)

app.listen(PORT, () => {
    console.log(`Running on ${process.env.URL_BOT_API}:${PORT}`)
})
