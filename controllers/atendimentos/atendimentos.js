const Atendimento = require('../../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req,res) => { 
        res.end("Você está na /atendimento");
    });

    app.post('/atendimentos',(req,res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento,res);        
    });
}