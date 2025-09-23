const express = require('express')
const app = express()
const port = 3002

let alunos = [
    {ID: 1, nome: "José", idade: 15},
    {ID: 2, nome: "Ana", idade: 16},
    {ID: 3, nome: "Alex", idade: 18}
]

app.get("/alunos", (req, res) => {
    return res.json(alunos)
})

app.get("/alunos/:ID", (req, res) => {
    const {ID} = req.params
    const id = alunos.findIndex(A => A.ID === parseInt(ID))

    if (id === -1) {
        return res.status(404).json({error: "ID não encontrado"})
    }

    return res.json(alunos[id])
})

app.post("/alunos", (req, res) => {
    const {ID, nome, idade} = req.body

    if (!nome || !idade || !ID) {
        return res.status(400).json({error: "Nome, idade e ID são obrigatórios!"})
    }

    const novoAluno = {
        ID,
        nome,
        idade
    }

    alunos.push(novoAluno)

    return res.status(201).json(novoAluno)
 })

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})