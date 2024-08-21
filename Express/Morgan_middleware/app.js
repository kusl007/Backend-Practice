const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan("combined")) //dev ,tiny ,combined

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)