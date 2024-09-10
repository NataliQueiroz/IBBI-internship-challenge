const express = require('express')
const { request } = require('http')
const app = express()
const port = 3000
const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(':memory:')
// const db = new sqlite3.Database('banco-de-dados.db')
db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR (255) NOT NULL,
      email VARCHAR (255) NOT NULL,
      password VARCHAR (255) NOT NULL,
      status BOOLEAN NOT NULL )
  `)
})

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  db.all('SELECT * FROM Users', [], (err, rows) => { 
    if (err) {
      return res.status(500).json({error: err.message})
    }
    res.json({ users: rows })
  })
})

app.post('/users', (req, res) => {
  const {nome, email, password, status} = req.body
  db.all('INSERT INTO Users(nome, email, password, status) values (?,?,?,?)', [nome, email, password, status],
   (err, rows) => { 
    if (err) {
      return res.status(500).json({error: err.message})
    }
    res.json({message: "Usuário cadastrado com sucesso!" })
  })
  
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})