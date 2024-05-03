//CRIANCO CONEXÃO COM MONGODB
//IMPORTAMOS NOSSA URL DE CONEXÃO DO ARQUIVO DOTENV

require("dotenv").config();
const mongoose = require("mongoose");
const Produto = require("./modelo");

const url = process.env.MONGODB_URL;

async function main() {
    try {
        await mongoose.connect(url);
        console.log("Deu certo");
    } catch (err) {
        console.log("Deu ruim !", err.message);
    }

    //CRIANDO PRODUTO

    //   const produto = new Produto({
    //     nome: "maçã",
    //     preco: 12.0,
    //     quantidade: 5,
    //   });

    //   await produto.save();

    //ALTERANDO PRODUTO

    //   const produto = await Produto.findOne({ nome: "maçã" });
    //   produto.nome = "abacaxi";
    //   produto.preco = 11.5;
    //   produto.quantidade = 4;

    //   await produto.save();

    //OUTRA FORMA DE INSERIR PRODUTO
    //  const produto = Produto.create({
    //      nome: "uva",
    //      preco: 31.5,
    //      quantidade: 5,
    // });
    // console.log(produto._id);

    //OUTRA FORMA DE INSERIR PRODUTO 2
    try {  
        const produtoNovo = await Produto.create({
            nome: "     ", 
            preco: -31.5, 
            quantidade: 5
        });
        console.log(produtoNovo);
      } catch (err) {
        for (let key in err.errors) {
            console.log(err.errors[key].message);
        }
      }

    // //OUTRA FORMA DE ATUALIZAR PRODUTO
    // const produtoAtualizado = Produto.findOneUdadte(
    //     { nome: "maçã" },
    //     { nome: "maca fugi", preco: 16.0, quantidade: 2 }
    // );
    // console.log(produtoAtualizado);

    // //CONSULTAR PRODUTO
    // const produtoConsultado = Produto.findOne({ nome: "uva" });
    // console.log(produtoConsultado);

    // //REMOVER PRODUTO
    // const produtoRemovido = Produto.findOneAndDelete({ nome: "uva"});
    // console.log(produtoRemovido);

    //FECHANDO CONEXAÇÃO
    await mongoose.disconnect();
}

main();
