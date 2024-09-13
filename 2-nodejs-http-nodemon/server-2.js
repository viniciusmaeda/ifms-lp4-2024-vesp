// importação dos pacotes/bibliotecas
const http = require('http');
const url = require('url'); // manipular o endereço url

// configuação de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // 2 instruções para o navegador
  res.statusCode = 200; // código de status Ok
  res.setHeader('Content-Type', 'text/plan; charset=utf-8');

  const q = url.parse(req.url, true).query; // manipular a url extraindo os parâmetros

  // let parametros = 'Parâmetro 1: ' + q.p1;
  let parametros = `
    Nome: ${q.nome}
    Sobrenome: ${q.sobrenome}
    Email: ${q.email}
  `;
  

  // mensagem que irá aparecer no corpo da página (<body>)
  res.write(parametros);
  // res.write('Hello world!!! You reach the server.');
  res.end(); // finalizar a resposta
});

// colocar o servidor no ar
server.listen(
  port,
  localhost,
  console.log('Server running....')
);