const readline = require("readline-sync");

const Contato = require("./modelo");

const contatos = [];

function criar() {
    const nome=
        readline.question("Informe o nome do contato: ");

    const telefone=
        readline.question("Informe o numero do contato: ");

    const novo = new Contato(nome, telefone);

    contatos.push(novo);
    readline.question("Pressione ENTER para continuar");
};

function listar() {
    contatos.forEach(contato =>
        console.log(contato.nome, '-', contato.telefone));
    readline.question("Pressione ENTER para continuar");
};

function atualizar() {
    const nome =
        readline.question("Informe o nome do contato: ");
    const buscarContato =
        contatos.find(contato => contato.nome === nome);
    if (buscarContato) {
        const telefone =
            readline.question("Informe o novo telefone do contato");
            buscarContato.telefone = telefone;
    } else {
        console.log("Contato não encontrado");
    }
    readline.question("Pressione ENTER para continuar");
};

function buscar() {
    const nome =
        readline.question("Informe o nomme do contato: ");
    const buscarContato = contatos.find(contato => contato.nome === nome);
    if(buscarContato) {
        console.log(buscarContato.nome, '-', buscarContato.telefone);
    } else {
        console.log("Contato não encontrado");
    };

    readline.question("Pressione ENTER para continuar");
};

function remover() {
    const nome =
        readline.question("Informe o nome do contato: ");
    const posicao = contatos.findIndex(contato => contato.nome === nome);
    if(posicao>=1) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Contrato não localizado");
    }
    readline.question("Pressione ENTER para continuar");
};

module.exports = { listar, criar, buscar, atualizar, remover};
