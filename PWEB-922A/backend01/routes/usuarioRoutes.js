const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();

// POST /usuarios – cadastro
router.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const usuario = await Usuario.create({ nome, email, senha });

    return res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
});

// GET /usuarios – listagem
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao listar usuários' });
  }
});

module.exports = router;
