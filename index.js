const express = require('express')
const transactionRoute = require('./routes/transactions')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World 123!')
})

app.use('/transactions', transactionRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})