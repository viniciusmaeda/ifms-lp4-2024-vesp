// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
// rota para acesar o método GET para veículo
rotas.get('/', (req, res) => {
  res.send('Você acessou a rota veículo.')
})


// POST
// rota para acesar o método POST para veículo
rotas.post('/cadastro', (req, res) => {
  res.send('Você está na rota para o cadastro de um novo veículo.');
  // implementação para cadastrar um novo estudante
});


// PUT
// rota para acesar o método PUT para veículo
rotas.put('/atualizacao', (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um veículo.');
});


// DELETE



// exportar toda a configuração das rotas
module.exports = rotas;