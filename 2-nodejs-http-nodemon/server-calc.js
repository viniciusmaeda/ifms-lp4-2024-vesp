/*
* Criar um servidor que receba 2 números pela url e informe a soma
* http://127.0.0.1:3000/?n1=5&n2=3
*/

// importação dos pacotes/bibliotecas
const http = require('http');
const url = require('url'); // manipular o endereço url

// configuação de acesso ao servidor
const localhost = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // 2 instruções para o navegador
  res.statusCode = 200; // código de status Ok
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // formato da resposta em html

  const q = url.parse(req.url, true).query; // manipular a url extraindo os parâmetros

  // extrair os parâmetros da url e converter para números
  let n1 = Number(q.n1);
  let n2 = Number(q.n2);
  let resposta = `
    A <u>soma</u> de ${n1} + ${n2} é igual a <b>${n1 + n2}</b>.<br>
    A <u>subtração</u> de ${n1} - ${n2} é igual a <b>${n1 - n2}</b>.<br>
    A <u>divisão</u> de ${n1} / ${n2} é igual a <b>${n1 / n2}</b>.<br>
    A <u>multiplicação</u> de ${n1} * ${n2} é igual a <b>${n1 * n2}</b>.
  `;

  // mensagem que irá aparecer no corpo da página (<body>)
  res.write(resposta);
  res.end(); // finalizar a resposta
});

// colocar o servidor no ar
server.listen(
  port,
  localhost,
  console.log('Server running....')
);