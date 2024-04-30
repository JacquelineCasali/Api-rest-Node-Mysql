const express = require("express");
const produtosControllers = require("../controllers/ProdutosControllers");
const lojaControllers = require("../controllers/lojaControllers");
const router = express.Router();

router.post('/',lojaControllers.criar)
router.get('/',lojaControllers.listar)
    
router.get('/:id', lojaControllers.ler);
 router.put('/:id',lojaControllers.update)
 router.delete("/:id",lojaControllers.delete);
 
 
 router.post('/:lojaId/produto',produtosControllers.criar)
router.get('/:lojaId/produto',produtosControllers.listar)
    
router.get("/:lojaId/produto/:id", produtosControllers.ler);
 router.put('/:lojaId/produto/:id',produtosControllers.update)
 router.delete("/:lojaId/produto/:id",produtosControllers.delete);



module.exports = router;