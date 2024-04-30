const readline = require('readline-sync');
const controllador = require("./controllador")

function exibirMenu() {
    console.log("AGENDA");
    console.log("1 - Consultar contato");
    console.log("2 - Incluir contato");
    console.log("3 - Alterar contato");
    console.log("4 - Remover contato");
    console.log("5 - Sair");
}

async function escolherOpcao(opcao) {
    switch(opcao) {
        case '1': {
            const nome = readline.question("Informe um nome: ");
            const contato = await controllador.consultarContatos(nome)
            console.log("Contato localizado.", contato)
            break;
        }
        case '2': {
            const nome = readline.question("Informe um nome");
            const email = readline.question("Informe um email");
            const telefone = readline.question("Informe um telefone");
            const contato = await controllador.incluirContatos(nome, email, telefone)
            console.log("Contato adicionado", contato);
            break;
        }
        case '3': {
            const nome = readline.question("Informe um nome");
            const email = readline.question("Informe um email");
            const telefone = readline.question("Informe um telefone");
            const contato = await controllador.atualizarContatos(nome, email, telefone);
            console.log("Contato atualizado", contato);
            break;
        }
        case '4': {
            const nome = readline.question("Informe um nome: ");
            const contato = await controllador.removerContatos(nome);
            console.log("Contato removido", contato)
            break;
        }
        case '5': {
            process.exit(0);
        }
        default: console.log("Opção inválida. Tente novamente.");
    }
}

async function main() {
    while(true) {
        exibirMenu();
        const opcao = readline.question("Entre com a opcao: ");
        await escolherOpcao(opcao);
    };
};

main();