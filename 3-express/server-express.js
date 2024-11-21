/**
 * Exemplo de servidor que utiliza a biblioteca Express
 */

// importar a biblioteca
const express = require('express');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// criação do aplicativo servidor
const app = express();

// rota raiz do servidor
app.get('/', (req, res) => {
  res.send('Você acessou a raiz do servidor web.');
});

// rota para dados dos estudantes
app.get('/estudante', (req, res) => {
  res.send('Você acessou a rota estudante.')
})


// rota para criar dados no servidor
app.post('/estudante/cadastro', (req, res) => {
  res.send('Você está na rota para o cadastro de um novo estudante.');
  // implementação para cadastrar um novo estudante
});

// rota para atualizar os dados no servidor
app.put('/estudante/atualizar', (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um estudante.');
});

// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));