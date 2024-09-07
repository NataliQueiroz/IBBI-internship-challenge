const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const sqlite3 = require('sqlite3').verbose()

// const db = new sqlite3.Database(':memory:')
const db = new sqlite3.Database('banco-de-dados.db')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})