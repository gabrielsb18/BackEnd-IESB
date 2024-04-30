const modelo = require('./modelo');

function consultarContatos(nome){
    const contato = new modelo.Contato(nome);
    return modelo.consultar(contato);
};

async function incluirContatos(nome, email, telefone){
    const contato = new modelo.Contato(nome, email, telefone);
    return await modelo.inserir(contato);
};

async function atualizarContatos(nome, email, telefone){
    const contato = await consultarContatos(nome);
    contato.email = email; 
    contato.telefone = telefone;
    await modelo.alterar(contato);
    return contato;
};

async function removerContatos(nome){
    const contato = await consultarContatos(nome);
    await modelo.deletar(contato);
    return contato;
};

module.exports = {
    consultarContatos,
    incluirContatos,
    atualizarContatos,
    removerContatos
};