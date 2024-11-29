// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
// rota para acesar o método GET para veículo
rotas.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a rota raiz de veículo.'
  });
})

// GET
// rota para acesar o método GET para consultar um veículo
// a partir do ID, enviado pelo url
rotas.get('/:idVeiculo', (req, res) => {

  // obter o id enviado pela url
  const idVeiculo = req.params.idVeiculo;

  res.status(200).send({
    mensagem: `Id recebido pelo servidor: ${idVeiculo}`
  });
})


// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {

  // implementar código para salvar os recebidos no banco de dados


  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Veículo cadastrado com sucesso.'
  });
});


// PUT
// rota para acesar o método PUT para veículo
rotas.put('/', (req, res) => {
  
  // implementação do código para atualizar o veículo no banco


  res.status(200).send({
    mensagem: 'Veículo atualizado com sucesso.'
  });
});


// DELETE
// rota para excluir um veículo
rotas.delete('/', (req, res) => {

  // implementação de código que irá excluir do banco


  res.status(202).send({
    mensagem: 'Veículo excluído com sucesso.'
  });

});



// exportar toda a configuração das rotas
module.exports = rotas;