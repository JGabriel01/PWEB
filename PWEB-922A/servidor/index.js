// 1. Importar o Express
const express = require('express');

// 2. Criar uma instância do Express
const app = express();

// 3. Definir a porta do servidor
const port = 3000;

// 4. Criar uma rota para a URL raiz ('/')
app.get('/', (req, res) => {
  res.send('Olá! Este é meu primeiro servidor web com Express.');
});

// 5. Iniciar o servidor e escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});