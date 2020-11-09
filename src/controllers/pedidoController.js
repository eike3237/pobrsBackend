const Pedido = require('../models/pedido');
const status = require('http-status');

const Cliente = require('../models/cliente');
const TabelaProduto = require('../models/produto');

exports.Insert =  (req, res, next) => {
    const nomeProd = req.body.nomeProd;
    const precoVenda = req.body.precoVenda;
    const catProduto = req.body.catProduto;
    const idCliente = parseInt(req.params.idCliente);
    

    Pedido.create({
       
        nomeProd: nomeProd,
        precoVenda: precoVenda,
        catProduto: catProduto,
        idCliente: idCliente,

    })

        .then(pedido => {
            if (pedido){
                res.status(status.OK).send(pedido);
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Pedido.findAll()
        .then(pedido => {
            if(pedido) {
                res.status(status.OK).send(pedido);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.idCliente;//pegando o ID da URL

    Pedido.findByPk(id)
        .then(pedido => {
            if (pedido) {
                res.status(status.OK).send(pedido);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next (error));
}; // ta errado pq to pegando como se eu quisesse somente 1 pedido em especifico

exports.DeletePedido = (req, res, next) => {
    const idPedido = req.params.idPedido;

    Pedido.findByPk(idPedido)
        .then(pedido => {
            if (pedido) {
                pedido.destroy({
                    where: {idPedido: idPedido}
                })
                .then(() => {
                    res.status(status.OK).send();
                })
                .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.SelectPedidoCliente = (req, res, next) => {
    const id = req.params.idCliente;
    const {Op} = require("sequelize");

    Pedido.findAll({where: {idCliente: id}})
    .then(pedido => {
        if(pedido) {
            res.status(status.OK).send(pedido);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next (error));
}