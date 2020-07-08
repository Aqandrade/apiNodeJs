const customExpress = require('./config/custom-express');

const conexao = require('./infraestrutura/conexao');

conexao.connect((erro) => {
    if(erro) {
        
        console.log(erro);
        
    } else {

        const app = customExpress();

        app.listen(3000,() => { console.log("Servidor iniciado na porta 3000") });

    }
});