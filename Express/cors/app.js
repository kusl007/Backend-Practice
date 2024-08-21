const express = require('express')
const app = express()
const cors = require('cors')

// app.use(cors()) //it share all data

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/shareable',cors(), function (req, res) { // this shares limited data from that path only
  res.send('shareable data')
})

app.listen(3000)