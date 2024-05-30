const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Servir arquivos estáticos
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/sobre.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/contato.html'));
});

app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/cadastrar.html'));
});

app.get('/entrar', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/entrar.html'));
});

app.get('/game/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/home.html'));
});

app.get('/game/mensagem', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/interno/message.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
