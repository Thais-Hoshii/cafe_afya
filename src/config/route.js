const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home-controller')
const ContatosController = require('../controllers/contatos-controller')

/* GET home page. */
router.get('/', HomeController.index);
router.get('/sobre', HomeController.sobre);
router.get('/produtos', HomeController.produtos);
router.get('/loja', HomeController.loja);

router.get('/fale-conosco', ContatosController.index);
router.post('/fale-conosco/cadastrar', ContatosController.cadastrar);

router.get('/contatos', ContatosController.contatos);
router.put('/contatos/:id', ContatosController.atualizar);
router.delete('/contatos/:id', ContatosController.excluir);

module.exports = router;
