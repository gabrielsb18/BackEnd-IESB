const express = require("express");
const app = express();

//Existen duas maneiras de declarar os metodos dos serviços!
//Midleware embutido e de aplicação

//Midleware Integrado
app.use(express.json()); 
app.use(express.urlencoded({ extended:false }));

//Midleware de App
app.use(function (req, res, next){
    console.log("Data/Hora", new Date());
    console.log("Url:", req.url);
    console.log("Metodo:", req.method);
    console.log("Parametros:", req.params);
    console.log("Corpo", req.body);
    console.log("Cabecalho:", req.headers);
    next();
});

//Midleware de rota
app.get("/", function(req, res){
    res.send("Home");
    res.status(200).end();
    // res.send("Hello World");
    // res.json({codigo: 200, mensagem: "De boas"});
});

app.post("/", function(req, res){
    console.log(req.body);
    res.status(204).end();
});

app.put("/", function(req, res){
    res.status(204).end();
});

app.delete("/", (req, res) => {
    throw new Exception('erro');
});

//Midleware de tratamento de erro
app.use(function(error, req, res, next){
    res.status(400).send({message: "Deu ruim"});
});

app.listen(3333, function(){
    console.log("Servidor funcionando");
});

module.exports = app;