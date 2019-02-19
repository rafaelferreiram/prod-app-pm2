# Módulo 5 - Bancos de Dados - Nosso projeto Multi-banco de dados

- Trabalhando com o padrão Strategy para Multi DataSources

## Instalando docker para usar o MongoDB e Postgres

```shell
docker run \
    --name postgres \
    -e POSTGRES_USER=rafael \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=herois \
    -p 5432:5432 \
    -d \
    postgres
docker exec it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## ---- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'admin', pwd: 'admin', roles: [{role: 'readWrite', db: 'herois'}]})"
```