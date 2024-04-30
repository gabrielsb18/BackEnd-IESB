const {conectarDb} = require("./database")


class Contato {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.emai = email;
        this.telefone = telefone;
        this.id = null;
    }
};

async function inserir(contato){
    const {nome, email, telefone} = contato;
    const db = await conectarDb();
    const collection = db.collection("contatos");
    const result = await collection.insertOne({nome, email, telefone});
    contato.id = result.insertId;
    return contato;
};

async function consultar(contato){
    const {nome} = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');
    const result = await collection.findOne({nome});
    contato.id = result._id;
    contato.email = result.email;
    contato.telefone = result.telefone;
    return contato;
};

async function alterar(contato){
    const {id,nome, email, telefone} = contato;
    const db = await conectarDb();
    const collection = db.collection("contatos");
    await collection.updateOne({_id: id},{$set: {nome, email, telefone}});
    return contato;
};

async function deletar(contato){
    const {id} = contato;
    const db = await conectarDb();
    const collection = db.collection("contatos");
    await collection.deleteOne({_id: id});
};

module.exports = {
    Contato,
    inserir,
    consultar,
    alterar,
    deletar
};