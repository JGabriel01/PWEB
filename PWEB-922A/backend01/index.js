const express = require('express');
const sequelize = require('./database/db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(usuarioRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o MySQL estabelecida.');

    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
})();