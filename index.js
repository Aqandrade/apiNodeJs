const express = require('express');

const app = express();

app.listen(3000,() => { console.log("Servidor iniciado na porta 3000") });

app.get('/atendimentos', () => { console.log("Você está na /atendimento") });