# Burger Orders API

## Sobre o projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais de desenvolvimento back-end utilizando Node.js e Express.

A aplicação simula o sistema de gerenciamento de pedidos de uma hamburgueria, permitindo o cadastro e controle completo dos pedidos através de uma API REST.

## Funcionalidades

* Criar novos pedidos
* Listar todos os pedidos
* Buscar pedido por ID
* Atualizar informações de um pedido
* Alterar status do pedido para "Pronto"
* Remover pedidos
* Validação de ID através de middleware
* Registro de logs das requisições

## Tecnologias utilizadas

* Node.js
* Express
* UUID
* Cors
* JavaScript

## Estrutura da API

### Listar pedidos

GET /order

### Criar pedido

POST /order

### Buscar pedido por ID

GET /order/:id

### Atualizar pedido

PUT /order/:id

### Alterar status para pronto

PATCH /order/:id

### Remover pedido

DELETE /order/:id

## Conceitos praticados

* APIs REST
* Métodos HTTP
* Middlewares
* Parâmetros de rota
* Manipulação de arrays
* Estruturação de aplicações Express
* Geração de identificadores únicos com UUID

## Objetivo

Desenvolver uma API REST completa para consolidar conhecimentos de Node.js, Express e arquitetura CRUD.
