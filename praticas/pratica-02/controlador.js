const contato = require("./modelo");
const readline = require("readline-sync");

const contatos = [];

//Quase certo, pórem fautou os readlines

//Retirei os parametros
function adicionarContato (){
    const nome =
        readline.question("Informe o nome do Contato: ");

    const telefone=
        readline.question("informe o número do Contato: ");

    const novoContato = new contato(nome, telefone);


    contatos.push(novoContato);
    
    readline.question("Pressione ENTER para continuar");
};

function listarContato() {
    /** Função antiga que apenas retornava os contatos sem qualquer interação com usúario */
    //return contatos;

    //O forEarch é util tanto para interações com o console quanto criar efeitos(manipular) mantendo o array original

    contatos.forEach(contato =>
        console.log(contato.nome, '-', contato.telefone));
    readline.question("Pressione ENTER para continuar");
};

function buscarContato() {
    //Meu usuario entra com um nome
    const nome =
    readline.question("Informe o nome do contato: ")

    const buscarContato = contatos.find(contato => contato.nome === nome);

    //Logica Implementada como retorno ao usúario
    if(buscarContato) {
        console.log(buscarContato.nome, "-",buscarContato.telefone);
    } else {
        console.log("Contato não encontrado!")
    };

    //Intereção
    readline.question("Pressione ENTER para continuar ")
};

function atualizarContato() {
    // const localizaContato = buscarContato();
    
    // if(contato) {
    //     contato.email = email;
    //     contato.telefone = telefone;
    // };

    const nome =
        readline.question("Informe o nome do contato: ");

    const buscarContato =
        contatos.find(contato => contato.nome === nome);

    if (buscarContato) {
        const telefone =
            readline.question("Informe o novo telefone do contato: ");

        buscarContato.telefone = telefone;

    } else {
        console.log("Contato não encontrado");
    }

    readline.question("Pressione ENTER para continuar");
};

function removerContato() {
    const nome = readline.question("Informe o nome do contato: ")

    const index = contatos.findIndex(contatos => contatos.nome === nome);

    //.findIndex - localiza um contato pela posição
    if (index !== -1) {
        contatos.splice(index, 1)
    } /*msg para o usuario*/ else {
        console.log("Contato não encontrado! ");
    };

    readline.question("Pressione ENTER para continuar");
};

module.exports = {
    adicionarContato,
    atualizarContato,
    buscarContato,
    removerContato,
    listarContato,
};