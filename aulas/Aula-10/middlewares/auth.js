const jwt = require('jsonwebtoken');

function validarToken(req, res, next) {
   const token = req.headers['authorization'];
   try {
    (jwt.verify(token, process.env.SEGREDO))
        next()
   } catch (error){
    res.status(401).json({msg: 'acesso negado'});
   }

}

module.exports = {validarToken};
