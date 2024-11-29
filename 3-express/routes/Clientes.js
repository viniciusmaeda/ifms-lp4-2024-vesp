// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
// rota para acesar o método GET para cliente
rotas.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a rota raiz de cliente.'
  });
})


// POST
// rota para acesar o método POST para cliente
rotas.post('/', (req, res) => {

  // obter os dados do corpo da requisição
  const novoCliente = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    senha: req.body.senha
  }

  // implementar código para salvar os recebidos no banco de dados


  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Cliente cadastrado com sucesso.',
    novoCliente: novoCliente
  });
});


// PUT
// rota para acesar o método PUT para cliente
rotas.put('/', (req, res) => {
  
  // implementação do código para atualizar o cliente no banco


  res.status(200).send({
    mensagem: 'Cliente atualizado com sucesso.'
  });
});


// DELETE
// rota para excluir um cliente
rotas.delete('/', (req, res) => {

  // implementação de código que irá excluir do banco


  res.status(202).send({
    mensagem: 'Cliente excluído com sucesso.'
  });

});



// exportar toda a configuração das rotas
module.exports = rotas;