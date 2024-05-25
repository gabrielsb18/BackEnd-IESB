//Modulo responsavel por cryptografar a senha
const crypto = require('crypto');

const jwt = require("jsonwebtoken");

const Usuario = require("../models/users");

function cifrarSenha(senha, salt){
    const hash = crypto.createHmac('sha256', salt);
    hash.update(senha);
    return hash.digest('hex');
}

async function criar (req,res){
    const {email, senha} = req.body;
    const salt = crypto.randomBytes(16).toString("hex");
    const novoUsuario = await Usuario.create({
        email,
        senha:cifrarSenha(senha, salt),
        salt,
    });
    res.status(201)
    .json({
        id: novoUsuario._id.toString(),
        email: novoUsuario.email,
        senha: novoUsuario.senha,
        salt: novoUsuario.salt
    })
}

async function entrar (req, res) {
    const usuario = await Usuario.findOne({email: req.body.email})
    console.log(usuario.senha, usuario.salt)
    if (usuario.senha === cifrarSenha(req.body.senha, usuario.salt)) {
        res.json({token: jwt.sign({email: usuario.email}, '123456',
        {expiresIn: '1h'}
    )})
    } else {
        res.status(401).status({msg: "acesso negado!"})
    }
}

module.exports = {criar, entrar};