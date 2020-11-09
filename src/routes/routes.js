const express = require('express');
const ClienteController = require ('../controllers/clienteController.js');
const PedidoController = require ('../controllers/pedidoController');
const ProdutoController = require('../controllers/produtoController');

const Cliente = require('../models/cliente.js');
const router = express.Router();

//Cliente
router.post('/cadastro/clientes', ClienteController.Insert);
router.get('/clientes', ClienteController.SelectAll);
router.get('/clientes/:id', ClienteController.SelectDetail);
router.put('/atualizarCliente/:id', ClienteController.Update);
router.delete('/clientes/:id', ClienteController.Delete);
//Pedido
router.post('/novoPedido/:idCliente', PedidoController.Insert);
router.get('/meusPedidos', PedidoController.SelectAll);
router.get('/pedidos/:idCliente', PedidoController.SelectPedidoCliente);
router.delete('/pedidos/:idPedido', PedidoController.DeletePedido);
//Produto
router.get('/produtos', ProdutoController.SelectAll);
router.post('/cadastro/produtos', ProdutoController.Insert);
router.get('/produtos/:idProduto', ProdutoController.SelectDetail);
router.delete('/deleteProduto/:idProduto', ProdutoController.Delete);

module.exports = router;