const express = require('express')
const axios = require('axios')
const cheerio = require ('cheerio')
const PORT = 5000


const app = express()

app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))

 