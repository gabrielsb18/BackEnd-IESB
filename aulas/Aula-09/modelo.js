const mongoose = require("mongoose");

//TRIM = VALIDA ESPAÇO
//REQUIRED = CAMPO OBRIGATORIO
//DEFAULT = SE DEIXAR EM BRANCO VAI SER COLOCADO 0
//MIN = O VALOR MINIMO É 0
//AO INSERIR O REQUIRE TRUE EM UM ARRAY ([]), PODEMOS PASSAR UMA MENSAGEM PARA SER EXEBIDA NA APLICAÇÃO

const produtoSchema = new mongoose.Schema({
    nome: {type:String, trim:true, uppercase:true, required:[true, 'Nome é Obrigatório'], minLenght: [3, "Nome deve ter no minimo 3 caracteres"], unique: [true, 'Produto já cadastrado']},
    preco: {type:Number, required:[true, "Preço é obrigatorio"], min: [0, "Valor minimo do preço é ZERO"]},
    quantidade: {type: Number, default: 0}
});

module.exports = mongoose.model('Produto', produtoSchema);