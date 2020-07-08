const express = require('express');

const cosign = require('consign');

const bodyParser = require('body-parser'); //Biblioteca para "traduzir" as informações do req.body

module.exports = () => {
    const app = express();
    
    app.use(bodyParser.urlencoded( { extended:false })); // Configuro que a aplicação receberá urlencoded como dados em requisições
    app.use(bodyParser.json()); // Configuro que a aplicação receberá json como dados em requisições

    cosign()
        .include('./controllers')
        .into(app);

    return app;

}
