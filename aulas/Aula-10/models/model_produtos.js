const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
    nome: {type: String, trim: true, uppercase: true, required: true},
    preco: {type: Number, required: true}
});

module.exports = mongoose.model("Produto", produtoSchema);