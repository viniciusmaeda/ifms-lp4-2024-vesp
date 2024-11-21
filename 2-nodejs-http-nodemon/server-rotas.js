/**
 * Exemplo de servidor que realiza o tratamento das rotas
 */

// importar os módulos
const http = require('http');

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

    // página
    res.write('<h1>Você está na raiz do site.</h1>')

    // responder com o objeto json
    res.end();
  } else if (url == '/contato') {
    // configuração do cabeçalho
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // página
    res.write('<h1>Você está na página contato.</h1>')

    // responder com o objeto json
    res.end();
  } else if (url == '/cadastro') {
    // configuração do cabeçalho
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // página
    res.write('<h1>Você está na página de cadastro.</h1>')

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