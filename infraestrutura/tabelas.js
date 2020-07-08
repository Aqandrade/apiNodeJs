class Tabelas{
    init(conexao){
        this._conexao = conexao;
        
        console.log('tabela foram criadas.');

        this.criarAtendimentos();

    }

    criarAtendimentos(){
        const sql = ` 
            CREATE TABLE IF NOT EXISTS Atendimentos (
                id int NOT NULL AUTO_INCREMENT, 
                cliente varchar(50) NOT NULL, 
                pet varchar(20), 
                servico varchar(20) NOT NULL, 
                status varchar(20) NOT NULL, 
                observacoes text, 
                PRIMARY KEY(id))`;

        this._conexao.query(sql,(erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela Atendimentos criadas com sucesso!');
            }
        
        })
    }

}

module.exports = new Tabelas;