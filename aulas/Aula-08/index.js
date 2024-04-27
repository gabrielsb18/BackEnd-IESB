const {MongoClient} = require("mongodb");

const url = "mongodb+srv://gabrielsb:gsbm1812@cluster0.jjmjham.mongodb.net/";

async function conectar(){
    const mgclient = await MongoClient.connect(url);
    //CRIANDO BANCO LOJA
    const db = mgclient.db('loja');
    return db;
//     //CRIANDO COLEÇÃO CLIENTES
//     const clients = db.collection("clients")
};

async function inserir(cliente){
    const db = await conectar();
    const clientes = db.collection("clients");
    return clientes.insertOne(cliente);
};

async function listar(){
    const db = await conectar();
    const clientes = db.collection("clients");
    return clientes.find({}).toArray();
};

async function atualizar(){
    const db = await conectar();
    const clientes = db.collection("clients");
    clientes.updateOne({_id: "6627038f463d376bdbd6c4b5"},{$set: {nome: "Gabi Santos"}});
};

async function remover(){
    const db = await conectar();
    const clientes = db.collection("clients");
    clientes.deleteOne({_id: ""});
};

inserir({nome: 'teste', telefone: '40028922'})