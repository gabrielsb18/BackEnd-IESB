const express = require("express");

const router = express.Router();

const produtos = [{
    "id" : 1,
    "nome": "melancia",
    "preco": 12.00
}];

router.get("/", (req, res) => {
    res.json(produtos);
});

module.exports = router;