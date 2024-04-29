const express = require("express");
const produtosControllers = require("../controllers/ProdutosControllers");
const lojaControllers = require("../controllers/lojaControllers");
const router = express.Router();

router.post('/loja',lojaControllers.criar)
router.get('/loja',lojaControllers.listar)
    
router.get("loja/:id", lojaControllers.ler);
 router.put('loja/:id',lojaControllers.update)
 router.delete("loja/:id",lojaControllers.delete);
 router.post('/',produtosControllers.criar)
router.get('/',produtosControllers.listar)
    
router.get("/:id", produtosControllers.ler);
 router.put('/:id',produtosControllers.update)
 router.delete("/:id",produtosControllers.delete);



module.exports = router;