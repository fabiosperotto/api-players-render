require('dotenv').config();
const express = require('express');
const config = require('./config.js');
const cors = require('cors');
const app = express();
app.use(express.json()); //aqui recebo e entrego documentos JSON
app.use(
    cors({
        origin: '*',
        // methods: ['GET']
    })
);

//ROTAS
app.get('/', (request, response) => {
    response.json({
        //documento JSON
        message: 'API para jogadores',
        version: '1.0',
        description: "API de players para o jogo XPTO veja a documentacao em https://app.swaggerhub.com/apis/personal-85a-aff/game-api-sample/1.0"
    });
});

const jogadorRotas = require('./app/routes/jogador.routes.js');
const clienteRotas = require('./app/routes/cliente.routes.js');
app.use(jogadorRotas);
app.use(clienteRotas);

//RODANDO SERVER
const conexao = require('./app/models/index.js'); //inicializa a config com sequelize

//RODANDO SERVER
if (require.main === module) { //se for chamado diretamente pelo arquivo, do contrario eh testes
    app.listen(config.port, () => {
        console.log('servidor on-line');
    });
}

module.exports = app; //para testes unitarios