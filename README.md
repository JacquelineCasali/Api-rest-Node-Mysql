## Projeto é uma Api Rest de Produtos
Api com relacionamento de tabelas com 1:1 , 1:n e n:n utilizando  o sequelize e o mysql,node.js e express

## Imagem do Projeto 
<!-- ![2024-04-29_065539](https://github.com/JacquelineCasali/Api-rest-Node-Mysql/assets/103325619/804310c8-0423-4473-8563-c4acfd368ab5) -->

 <p align="center">
  <img src="./server/images/2024-04-29_065539.png" width="600px">
</p>
-- filtrar por email,endereço e produto
<p align="center">
  <img src="./server/images/busca.png" width="600px">
</p>


# COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json

### npm install
Criar a base de dados "users" no MySQL
Alterar as credencias do banco de dados no arquivo ".env"

Executar as migrations
### npx sequelize-cli db:migrate

Rodar o projeto
### node app.js

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:3000


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Rodar o projeto
### node app.js

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a dependência na maquina, após instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon index.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:3000

Manipulação de arquivo, usado para upload
### npm install --save multer

requisição externa
### npm install cors


Comando SQL para criar a base de dados
### CREATE DATABASE upload CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install --save dotenv

Criar a Models situacao
### npx sequelize-cli model:generate --name Produtos --attributes nome:string,quantidade:INTEGER

Executar as migrations
### npx sequelize-cli db:migrate

Criar a migration para acrescentar as colunas nome e email
### npx sequelize-cli migration:generate --name alter-produtos-lojaId

Executar as migrations
### npx sequelize-cli db:migrate


