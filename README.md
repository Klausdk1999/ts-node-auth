<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descrição

Projeto de API RESTful para gerenciamento de clientes e contatos com autenticação.

## Requisitos

- **Node.js**: Baixe e instale o Node.js, incluindo o gerenciador de pacotes npm, no site [nodejs.org](https://nodejs.org/).
- **PostgreSQL**: Baixe e instale o PostgreSQL, disponível no site [postgresql.org](https://www.postgresql.org/).

## Installation

- Clone o repositório
- Execute o comando `npm install` para instalar as dependências do projeto.
- Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente, siga como exemplo o arquivo .env.example.
  Prisma:
- Execute o comando `npx prisma migrate dev` para criar as tabelas no banco de dados.
- Execute o comando `npx prisma db seed` para popular as tabelas com dados de exemplo.
- Execute o comando `npx prisma generate` para gerar os arquivos de tipos do Prisma.

## Executando o projeto

- Execute o comando `npm run start` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:3000/`.
- Na pasta /documentation, você encontrará exemplos de requisições para a API, que podem ser importados no Insomnia para testes.





## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Klaus Dieter Kupper
- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
