# Game-API - Deploy API REST no Render

[README in english](README-en-us.md)

Este projeto tem por objetivo fornecer um exemplo de como realizar o deploy de uma api REST na plataforma [Render](https://render.com/). Utiliza como projeto base o [Game-API - Pack de Aprendizado](https://github.com/fabiosperotto/api-players-express), possuindo as seguintes implementações:

- [Nodejs](https://nodejs.org/en);
- [Express](https://expressjs.com/);
- [Ajv](https://ajv.js.org/);
- [jsownwebtoken](https://github.com/auth0/node-jsonwebtoken);
- [ORM Sequelize](https://sequelize.org/) com PostgreSQL.

Para saber mais sobre como está organizado esta implementação, confira o [repositório](https://github.com/fabiosperotto/api-players-express) referência.

Este projeto faz parte de uma série de aprendizado em APIs com Nodejs e PHP. Se quiser saber mais sobre a série, materiais para docentes, dentre outras dúvidas, entre em contato!

## Compatibilidade

- node >= 18.x;
- npm 9.5.x;
- Express 4.18.2
- MySQL 8.0;
- Ajv 8.12.0;
- cors 2.8.5;
- jsonwebtoken 9.0.1;
- mysql2 3.6.0;
- sequelize 3.6.0.

## Instalação e Inicialização

Faça o fork do projeto ou o download e:

```bash
$ cd api-players-render
$ cp .env.example .env
# preencher os dados de variaveis no .env
$ npm install
$ node app.js
```

## Deploy no Render

1. Crie o banco de dados em PostgreSQL;
2. Crie um serviço web no Render;
3. Conecte via Render o repositório da aplicação;
4. Configure as variáveis de ambiente;
5. Faça o deploy.

Para mais informações veja as documentações em [Render docs](https://render.com/docs).

## Contribuindo com o projeto

Serão aceitas atualizações de pacotes, correções de bug e melhorias de segurança. Novas funcionalidades somente no projeto de referência.
