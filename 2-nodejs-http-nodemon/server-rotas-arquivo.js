/**
 * Exemplo de servidor que realiza o tratamento das rotas
 */

// importar os módulos
const http = require('http');
const fs = require('fs'); // módulo para acessar os arquivos

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

// configuração do servidor
const server = http.createServer((req, res) => {

  // obter a url (rota) inserida pelo usuario
  let url = req.url;

  // manipulação das rotas
  if (url == '/') {
    // configuração do cabeçalho
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // carregar o arquivo html
    const arquivoHtml = fs.readFileSync('./index.html');

    // responder com o código do arquivo .html
    res.end(arquivoHtml);

  } else if (url == '/contato') {
    // configuração do cabeçalho
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // carregar o arquivo html
    const arquivoHtml = fs.readFileSync('./contato.html');

    // responder com o código do arquivo .html
    res.end(arquivoHtml);
  } else if (url == '/cadastro') {
    // configuração do cabeçalho
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });


    // responder com o objeto json
    res.end();

  } else if (url == '/api') {
    // configuração do cabeçalho
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    const pessoa = {
      primeiroNome: 'Joaquim',
      ultimoNome: 'Silva',
      email: 'joaquim@email.com',
      telefone: '1111111111'
    };
  
    res.end(JSON.stringify(pessoa));
  } else {
    // configuração do cabeçalho
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });

    // página
    res.write('Página não encontrada')

    // responder com o objeto json
    res.end();
  }





});

// executar o servidor
server.listen(port, localhost, console.log('O servidor está rodando...'))