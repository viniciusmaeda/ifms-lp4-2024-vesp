// importar o pacote http
const http = require('http');

// definição dos meios de acesso ao servidor
let localhost = '127.0.0.1';
let port = 3000;

// configuração do servidor
const server = http.createServer((requisicao, resposta) => {
  resposta.statusCode = 200;
  resposta.setHeader('Content-Type', 'text/plain; charset=utf-8');
  
  resposta.write(`
    Olá, este é o servidor HTTP e está rodando localmente.\n
    Teste de pular linha.\n
    Outra linha do meu servidor.`
  );
  resposta.end();
});

// criar uma "escuta" no endereço e porta
server.listen(port, localhost, console.log('O servidor está rodando...'));


