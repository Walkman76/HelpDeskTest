const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    try {
        console.log('Bot svarar!')
        const msg = `<?xml version="1.0" encoding="UTF-8"?>
        <Response>
            <Say>Have you tried turning it off and on again?</Say>
        </Response>`
        res.set("Content-Type", "text/xml")
        res.send(msg)

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "Error" })
    }
})
module.exports = router