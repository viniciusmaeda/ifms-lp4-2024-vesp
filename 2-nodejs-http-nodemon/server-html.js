/**
 * Exemplo de servidor que responde com um código html
 */

// importar os módulos
const http = require('http');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {
  // configuração do cabeçalho
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.write('<h1>Título de nível 1</h1>');
  res.write('<p>Instituto Federal de Mato Grosso <b>do Sul</b></p>');

  res.end();

});

// executar o servidor
server.listen(port, localhost, console.log('O servidor está rodando...'))