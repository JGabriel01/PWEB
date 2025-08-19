const express = require('express')

const app = express()

const port = 3000

app.get("/" , (req, res) => {
  res.send("Olá este é o meu primeiro servidor!")
})

app.listen(port, () => {
  console.log(`Servidor Ativo na porta ${port}`)
})

//http://localhost:3000
