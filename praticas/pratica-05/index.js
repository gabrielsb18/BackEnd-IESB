const routerProdutos = require("./router.js");

app.use(routerProdutos);

const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, function(){
    console.log("Servidor funcionando!");
});

// app.get("/produtos", function(req, res){
//     res.json();
// });

// app.get("/produtos/Id:1", function(req, res){
//     res.json();
// });

module.exports = app;