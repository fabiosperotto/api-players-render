# Game-API - Deploy API REST on Render

[README in portuguese](README.md)

Thios project provide a example in how deploy an REST API in [Render](https://render.com/) platform. This example references the project [Game-API - Pack de Aprendizado](https://github.com/fabiosperotto/api-players-express), with the following code:

- [Nodejs](https://nodejs.org/en);
- [Express](https://expressjs.com/);
- [Ajv](https://ajv.js.org/);
- [jsownwebtoken](https://github.com/auth0/node-jsonwebtoken);
- [ORM Sequelize](https://sequelize.org/) with PostgreSQL.

In order to know more about the project organization, check the referenced [repository](https://github.com/fabiosperotto/api-players-express).

This project is part of a learning series about APIs with Nodejs and PHP. If you want more about this series, teacher materials and other doubts, stay in touch!

## Compatibility

- node >= 18.x;
- npm 9.5.x;
- Express 4.18.2
- MySQL 8.0;
- Ajv 8.12.0;
- cors 2.8.5;
- jsonwebtoken 9.0.1;
- mysql2 3.6.0;
- sequelize 3.6.0.

## Installation and Initialization

Fork or download this project and:

```bash
$ cd api-players-render
$ cp .env.example .env
# set de .env variables
$ npm install
$ node app.js
```

## Deploy on Render

1. Create the PostgreSQL database service;
2. Create a web service;
3. Connect your github repository in Render;
4. Set the environment variables;
5. Deploy your app.

For more docs see the [Render docs](https://render.com/docs).

## Contributing to the project

Package updates, bug fixes and security improvements will be accepted. New features only in the reference project.
