/**
 * Exemplo de servidor que utiliza a biblioteca Express
 */

// importar a biblioteca
// instalar o pacote usando o comando: npm install express
const express = require('express');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// criação do aplicativo servidor
const app = express();

// importar as configurações de rotas
const veiculosRotas = require('./routes/Veiculos');

// rota raiz do servidor
app.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a raiz do servidor web.'
  });
});

// configurar as rotas para veiculo
app.use('/veiculo', veiculosRotas);

// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));