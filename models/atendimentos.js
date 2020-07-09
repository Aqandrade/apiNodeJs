const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento,res){

        const dataAgendamento = moment(atendimento.dataAgendamento,'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm:ss');

        const dataCriacao = moment().format('YYYY-MM-DD hh:mm:ss');

        const dataEhValida = moment(dataAgendamento).isSameOrAfter(dataCriacao);

        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                'nome':'data',
                'valido':dataEhValida,
                'mensagem':'Data deve ser maior que a data de criação'
            },
            {
                'nome':'cliente',
                'valido':clienteEhValido,
                'mensagem':'Cliente deve ter pelo menos 5 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido);

        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros);
        } else {
            
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

    lista(res){
        const sql = "SELECT * FROM atendimentos";

        conexao.query(sql,(erro,resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                console.log(resultados);
                res.status(200).json(resultados)
            }
        });

    }

    buscaPorId(id,res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;

        conexao.query(sql,(erro,resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }
        })
    }

    altera(id,valores,res){

        if(valores.dataAgendamento){
            valores.dataAgendamento = moment(valores.dataAgendamento, 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
        }

        const sql = `
            UPDATE
                atendimentos
            SET
                ? 
            WHERE
                id = ?`;
            
        conexao.query(sql,[valores,id],(erro,resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }
}

module.exports = new Atendimento;