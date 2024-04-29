const express = require("express");

// ROTAS
const routerProdutos = require("./router.js");

const app = express(); 

//VOU SEPARAR AS ROTAS DE ACORDO COM OS SERVIÇOS
app.use(routerProdutos);

app.listen(3333, function(){
    console.log("Servidor funcionando")
});

module.exports = app;