module.exports = app => {
    app.get('/atendimentos', (req,res) => { 
        res.end("Você está na /atendimento");
    });

    app.post('/atendimentos',(req,res) => {
        console.log(req.body);
        res.end("Você está no post /atendimentos");
    })
}