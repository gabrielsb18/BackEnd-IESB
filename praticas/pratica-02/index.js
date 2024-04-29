const readline = require("readline-sync")
const contatoControlador = require("./controlador")

function menu(){
    console.log("1. Listar");
    console.log("2. Criar");
    console.log("3. Atualizar");
    console.log("4. Remover");
    console.log("5. Sair");
};

function escolherOpcao(opcao) {
    switch(opcao){
        case "1": contatoControlador.listarContato();break;
        case "2": contatoControlador.adicionarContato();break;
        case "3": contatoControlador.atualizarContato();break;
        case "4": contatoControlador.removerContato();break;
        case "5": process.exit(0);
        default: console.log("A opcao que voce escolheu é invalida")
    };
};

function main () {
    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao");
        escolherOpcao(opcao);
    };
};

main();