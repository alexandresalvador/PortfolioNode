const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Você está na página principal do portfolio');
});

app.get('/home', function(req, res) {
    res.send('Olá, você está no meu home do meu portfolio');
});

app.get('/perfil', function(req, res) {
    res.send('Olá, você está no meu perfil');
});

app.get('/perfil/:nome/:idade?/:cor?', (request, response) => {
    const nome = request.params.nome;
    const idade = request.params.idade;
    const cor = request.params.cor;
    response.send(`Eu sou o ${nome}, tenho ${idade} anos e sou da cor ${cor}`);
});

app.get('/graduacao', function(req, res) {
    res.send('Olá, você está no meu perfil de graduação');
});

app.get('/graduacao/:graduacao/:instituicao/:cidade', (request, response) => {
    const graduacao = request.params.graduacao;
    const instituicao = request.params.instituicao;
    const cidade = request.params.cidade;
    response.send(`Eu estudo ${graduacao}, na faculdade ${instituicao} que se localiza em ${cidade}`);
});

app.get('/trabalho', function(req, res) {
    res.send('Olá, você está no meu perfil de trabalho');
});

app.get('/trabalho/:profissao/:empresa/:cidade', (request, response) => {
    const profissao = request.params.profissao;
    const empresa = request.params.empresa;
    const cidade = request.params.cidade;
    response.send(`Eu sou ${profissao}, na empresa ${empresa} que se localiza em ${cidade}`);
});

app.get('/contato', function(req, res) {
    res.send('Olá, você está no meu perfil de contato');
});

app.get('/contato/:celular/:telefone/:email', (request, response) => {
    const celular = request.params.celular;
    const telefone = request.params.telefone;
    const email = request.params.email;
    response.send(`Meus contatos são: Celular: ${celular} | Telefone: ${telefone} | email ${email}`);
});

app.listen(9090, (erro) => {
    if(erro) {
        console.log(erro, 'Erro');
    } else {
        console.log('Servidor rodando: http://localhost:9090');
    }
});