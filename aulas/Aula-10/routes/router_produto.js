const express = require("express")
const controllerProdutos = require("../controllers/controller_produtos.js")
const router = express.Router();
const middleware = require("../middlewares/auth.js")

router.post("/", controllerProdutos.validaDados, controllerProdutos.criar);

router.get("/", middleware.validarToken, controllerProdutos.listarTodos);

router.get("/:id", controllerProdutos.buscarPeloId, controllerProdutos.obter);

router.put("/:id", controllerProdutos.buscarPeloId, controllerProdutos.validaDados, controllerProdutos.atualizar);

router.delete("/:id", controllerProdutos.buscarPeloId, controllerProdutos.remover);

module.exports = router;