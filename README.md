# 🍔 Burger Orders API

API REST para gerenciamento de pedidos de uma hamburgueria, desenvolvida com Node.js e Express.

> ⚠️ **Este projeto faz parte de um sistema com dois repositórios que se comunicam. Para funcionar corretamente, a API e o Frontend precisam estar rodando na mesma máquina ao mesmo tempo.**
>
> | Repositório | Link |
> |---|---|
> | 🔧 **API (você está aqui)** | [order-management-api](https://github.com/Momade-Ibraimo/order-management-api) |
> | 🖥️ **Frontend** | [app-pedidos-hamburgueria](https://github.com/Momade-Ibraimo/app-pedidos-hamburgueria) |

---

## 📌 Sobre o projeto

Desenvolvido para praticar conceitos fundamentais de back-end com Node.js e Express. Simula o sistema de gerenciamento de pedidos de uma hamburgueria, permitindo o controle completo dos pedidos através de uma API REST.

---

## ✅ Funcionalidades

- Criar novos pedidos
- Listar todos os pedidos
- Buscar pedido por ID
- Atualizar informações de um pedido
- Alterar status do pedido para "Pronto"
- Remover pedidos
- Validação de ID via middleware
- Registro de logs das requisições

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- UUID
- Cors
- JavaScript

---

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/order` | Lista todos os pedidos |
| `POST` | `/order` | Cria um novo pedido |
| `GET` | `/order/:id` | Busca pedido por ID |
| `PUT` | `/order/:id` | Atualiza um pedido |
| `PATCH` | `/order/:id` | Altera status para "Pronto" |
| `DELETE` | `/order/:id` | Remove um pedido |

---

## ⚙️ Como rodar

```bash
# Clone o repositório
git clone https://github.com/Momade-Ibraimo/order-management-api

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

A API ficará disponível em `http://localhost:3001`.

> 💡 Após iniciar a API, suba também o frontend para usar a interface visual: [app-pedidos-hamburgueria](https://github.com/Momade-Ibraimo/app-pedidos-hamburgueria)

---

## 🧠 Conceitos praticados

- APIs REST
- Métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- Middlewares
- Parâmetros de rota
- Manipulação de arrays
- Estruturação de aplicações Express
- Geração de identificadores únicos com UUID

---

## 🎯 Objetivo

Desenvolver uma API REST completa para consolidar conhecimentos de Node.js, Express e arquitetura CRUD.... 
