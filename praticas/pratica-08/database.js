const { MongoClient } = require("mongodb");

const url = "mongodb+srv://gabrielsb:<password>@cluster0.jjmjham.mongodb.net/";

const client = MongoClient(url);
async function conectarDb(){
    await client.connect();
    const db = client.db('agenda');
    return db;
};

modules.exports = {conectarDb};