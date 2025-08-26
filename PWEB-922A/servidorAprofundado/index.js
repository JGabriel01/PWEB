const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/auth', express.json(), (req, res) => {
    res.send(`Você fez uma requisição POST`)
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});