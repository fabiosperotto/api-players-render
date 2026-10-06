const conexao = require('./conexao.js');
 
const db = {}; //armazenar as classes e models
db.conexao = conexao;
 
//importar aqui para atribuir na lista de models e inicializar o BD:
db.Jogador = require('./Jogador.js');
db.Equipamento = require('./Equipamento.js');
db.Cliente = require('./Cliente.js');
 
require('./relations.js')(conexao.models);
 
//conectando e sincronizando com BD
conexao
  .sync({}) //{ force: true } --> para forcar a recriacao do banco
  .then(() => {
    console.log('sincronizacao com bd...');
  })
  .catch((err) => {
    console.log('falha ao sincronizar: ' + err.message);
  });
 
module.exports = db;