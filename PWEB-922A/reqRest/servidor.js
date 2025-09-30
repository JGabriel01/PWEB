const express = require('express')
const port = 3000

const app = express()

app.use(express.json())

let alunos = [
  {nome: "José", id: 109, idade: 16},
  {nome: "Ana", id: 2, idade: 20}
  ]

app.get("/alunos", (req, res) => {
  return res.json(alunos)
})

app.get("/alunos/:id", (req, res) => {
  let {id} = req.params
  
  let aluno = alunos.find(A => A.id === parseInt(id))
  
  if(!aluno) {
    return res.status(404).json({error: "Aluno não encontrado."})
  }
  return res.json(aluno)
})

  app.post("/alunos", (req, res) => {
    const {nome, id, idade} = req.body
    
    if(!nome || !id || !idade) {
      return res.status(400).json({error: "Nome e id são obrigatórios"})
    }
    
    const novoAluno = {
      nome,
      id,
      idade
    }
    
    alunos.push(novoAluno)
    
    return res.status(201).json(novoAluno)
  })

app.put("/alunos/:id", (req, res) => {
  const {id} = req.params
  const {nome, idade} = req.body
  
  const aluno = alunos.findIndex(A => A.id === parseInt(id))
  
   if (!nome || !idade) {
    return res.status(400).json({error: "Nome e idade são obrigatórios."})
  }
  
  if (aluno === -1) {
    return res.status(404).json({error: "Aluno não encontrado"})
  }
  
  alunos[aluno].nome = nome
  alunos[aluno].idade = idade

  return res.json(alunos[aluno])
})

app.patch("/alunos/:id", (req, res) => {
  const {id} = req.params
  const {nome, idade} = req.body
  
  const aluno = alunos.findIndex(A => A.id === parseInt(id))
  
  if (aluno === -1) {
    return res.status(404).json({error: "Aluno não encontrado"})
  }
  
  if (nome) {
    alunos[aluno].nome = nome
  } if (idade) {
    alunos[aluno].idade = idade
  }
  
  return res.json(alunos[aluno])
})

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})