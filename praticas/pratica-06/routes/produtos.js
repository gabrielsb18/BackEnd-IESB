const express = require("express");
const controllerProdutos = require("../controllers/controller_produtos.js");

const router =express.Router();

router.get("/", controllerProdutos.listarTodos);

router.get("/:produtoId", controllerProdutos.buscarPeloId, controllerProdutos.exibir);

router.post("/", controllerProdutos.validarDados, controllerProdutos.criar);

router.put("/:produtoId", controllerProdutos.buscarPeloId, controllerProdutos.validarDados, controllerProdutos.atualizar);

router.delete("/:produtoId", controllerProdutos.buscarPeloId,controllerProdutos.remover);

module.exports = router;