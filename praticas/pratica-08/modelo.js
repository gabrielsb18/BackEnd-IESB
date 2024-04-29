import {conectarDb} from "./database.js";

async function mgcConnect(){
   const mgClient = conectarDb();
   return mgClient;
};

const db = mgcConnect(); 

async function dbContatos(){
    const contatos = await db.collection('contatos');
    return contatos.find({}).toArray();
};

const collection = dbContatos();

class Contato{
    constructor(nome, email, telefone){
        this.id = null;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone; 
    };

    inserir(){
        const result = collection.insertOne({
            nome: this.nome,
            email: this.email,
            telefone: this.telefone
        });

        this.id = result.ops[0]._id;
    };

    async alterar(contato) {
        const db = await mgcConnect();
        const collection = dbContatos();
        const result = collection.updateOne({_id: contato.id},{$set: {nome: contato.nome, email:contato.email, telefone:contato.telefone}});
    };

    async deletarContato(contato){
        const db = await mgcConnect();
        const collection = dbContatos();
        const result = collection.deleteOne({nome:contato.nome}); 
    };
}