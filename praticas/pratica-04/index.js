const express = require("express");

//Instaciando express
const app = express();

//Definindo a porta para funcionamento do node
app.listen(3000, function(){
    console.log("Servidor funcionando");
});

//Midleaware responsável por dizer que o formato de retorno que vamos receber será em formato .json
app.use(express.json());

app.get("/", function(req, res){
    res.send("Serviço criado!");
    res.status(200).end();
});

app.post("/", function(req, res){
    res.send("Voçê fez uma requisição post");
    res.status(201).end();
});

app.put("/", function(req, res){
    res.send("Voçê fez uma requisição PUT");
    res.status(200).end();
});

app.delete("/", function(req, res){
    res.send("Serviço deletado com sucesso!");
    res.status(204).end();
});

//Exportando meu modulo
module.exports = app;