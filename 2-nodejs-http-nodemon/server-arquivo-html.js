/**
 * Exemplo de servidor que responde com uma página html
 */

// importar os módulos
const http = require('http');
const fs = require('fs'); // módulo para acessar os arquivos

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {
  // configuração do cabeçalho
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // carregar o arquivo html
  const arquivoHtml = fs.readFileSync('./index.html');

  // responder com o código do arquivo .html
  res.end(arquivoHtml);

});

// executar o servidor
server.listen(port, localhost, console.log('O servidor está rodando...'))