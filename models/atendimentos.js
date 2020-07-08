const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento,res){

        const dataAgendamento = moment(atendimento.dataAgendamento,'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm:ss');

        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss');

        const atendimentoDatado = {...atendimento,dataAgendamento,dataCriacao};

        const sql = 'INSERT INTO Atendimentos SET ?';

        conexao.query(sql,atendimentoDatado,(erro,resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(resultados)
            }
        });
    }
}

module.exports = new Atendimento;