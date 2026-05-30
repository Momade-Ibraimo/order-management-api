// Desafio Node - 1
// 🚀 Sobre o desafio
// Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar Node e Express.
// Rotas
//1!- GET /order : Rota que lista todos os pedidos já feitos.
//2!- POST /order : A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informações devem ser passadas '
// dentro do corpo (body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no
// seguinte formato: { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José",
// price: 44.50, status:"Em preparação" }. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o
// pedido é criado, você deve sempre colocar o status como "Em preparação".
//3- GET /order/:id : Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.
//4 - PUT /order/:id : Essa rota deve alterar um pedido já feito. Pode alterar um ou todos os dados do pedido. O id do pedido deve ser enviado nos parâmetros da rota.
//5- PATCH /order/:id : Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve colocar o status do pedido como "Pronto".
//6- DELETE /order/:id : Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.

// Exemplo
// Se eu chamar a rota POST /order repassando { order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }, o array deve ficar assim:
// json[
//   {
//     id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
//     order: "X- Salada, 2 batatas grandes, 1 coca-cola",
//     clientName:"José",
//     price: 44.50,
//     status:"Em preparação"
//   }
// ];
// Se eu chamar a rota PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8, o array deve ficar assim:
// json[
//   {
//     id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
//     order: "X- Salada, 2 batatas grandes, 1 coca-cola",
//     clientName:"José",
//     price: 44.50,
//     status:"Pronto"
//   }
// ];
// Middlewares

// Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o ID passado existe.
//  Se não existir retorne um erro, caso
// contrário permita a requisição continuar normalmente;

// Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da requisição (GET, POST, PUT, DELETE, etc) e também a url da requisição.

// Exemplo: [GET] - /order
// 📅 Entrega
// Após finalizar o desafio, suba o projeto para o seu github e compartilhe no Club, para todos verem que você conseguiu.

// CONFIGURACOES GERAIS DA APLICAÇÃO DA PIZZARIA

const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
const {v4: uuidv4} = require("uuid")
const port = 3001;


// Inciando a criacao das api cadastro dos pedidos de uma hamburgueria

//Midddleware para verificar se o ID passado existe

const checkId = (request, response, next) => {
    const {id} = request.params 

    const order = orders.find((order) => order.id === id);

    const orderIndex = orders.findIndex((order) => order.id === id);
    if (orderIndex  < 0) {
        return response.status(404).json({ message: "pedido nao encontrado" });
    }

    request.order = order
    request.orderIndex = orderIndex
    request.orderId = id

    next()

}

//middeleware para mostrar o metodo da requisição e a url da requisição

app.use((request, response, next) => {
    console.log(`[${request.method}] - ${request.url}`);

    next()
})
 


//Rota para listar todos os pedidos já feitos

const orders = [];

app.get("/order", (request, response) => {
    return response
        .status(200)
        .json({ orders, message: "pedidos listados com sucesso" });
});

//Rota para receber  pedido do cliente

app.post("/order", (request, response) => {
    const { order, clientName } = request.body;
    // const uuidv4 = require("uuid").v4;
    const newOrder = {
        id: uuidv4(),
        order,
        clientName,
        // price,
        status: "Em preparacao",
    };
    orders.push(newOrder);

    return response
        .status(201)
        .json({ newOrder, message: "pedido criado com sucesso" });
});

//Rota para retornar um pedido específico

app.get("/order/:id", checkId, (request, response) => {
    // const { id } = request.params;
    const order = request.order

    // const order = orders.find((order) => order.id === id);

    // if (!order) {
    //     return response.status(404).json({ message: "pedido nao encontado" });
    // }

    return response
        .status(200)
        .json({ order, message: "pedido encontrado com sucesso" });
});

//Rota para alterar dados de um pedido já feito

app.put("/order/:id", checkId, (request, response) => {
    // const { id } = request.params;
    const orderIndex = request.orderIndex
    const id = request.orderId
    const { order, clientName, status } = request.body;

    // const orderIndex = orders.findIndex((order) => order.id === id);
    // if (orderIndex < 0) {
    //     return response.status(404).json({ message: "pedido nao encontrado" });
    // }

    const updatedorder = { id, order, clientName, status };
    orders[orderIndex] = updatedorder;

    return response
        .status(200)
        .json({ updatedorder, message: "pedido atualizado com sucesso" });
});

//Rota para colocar o status do pedido como "Pronto

app.patch("/order/:id", checkId, (request, response) => {
    // const { id } = request.params;
      
const orderIndex = request.orderIndex
    // const orderIndex = orders.findIndex((order) => order.id === id);
    // if (orderIndex < 0) {
    //     return response.status(404).json({ message: "pedido nao encontrado" });
    // }

    orders[orderIndex].status = "Pronto";

    return response
        .status(200)
        .json({
            order: orders[orderIndex],
            message: "pedido  pronto para a entrega",
        });
});

//Rota para deletar um pedido já feito

app.delete("/order/:id", checkId, (request, response) => {
    // const { id } = request.params;
     const orderIndex = request.orderIndex
    // const orderIndex = orders.findIndex((order) => order.id === id);

    // if (orderIndex < 0) {
    //     return response.status(404).json({ message: "pedido nao encontrado" });
    // }

    orders.splice(orderIndex, 1);

    return response.status(200).json({ message: "pedido deletado com sucesso" });
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

