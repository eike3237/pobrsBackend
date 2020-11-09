const Produto = require('../models/produto');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;    
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const catProduto = req.body.catProduto;
    const descricao = req.body.descricao;
    const linkImg = req.body.linkImg;
    

    Produto.create({
        
        nome: nome,
        precoCusto: precoCusto,
        precoVenda: precoVenda,
        catProduto : catProduto,
        descricao: descricao,
        linkImg: linkImg
    })

        .then(produto => {
            if (produto){
                res.status(status.OK).send(produto);
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Produto.findAll()
        .then(produto => {
            if(produto) {
                res.status(status.OK).send(produto);
            }
        })
        .catch(error => next(error));
};

exports.SelectDetail = (req, res, next) => {
    const idProduto = req.params.idProduto;//pegando o ID da URL

    Produto.findByPk(idProduto)
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next (error));
};

exports.Delete = (req, res, next) => {
    const idProduto = req.params.idProduto;

    Produto.findByPk(idProduto)
        .then(produto => {
            if (produto) {
                produto.destroy({
                    where: {idProduto: idProduto}
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
}

exports.Update = (req, res, next) => {
    const id = req.body.id; 
    const qtdPedido = req.body.qtdPedido; 
};

//Update usado para contagem de estoque ao comprar - TODO ERRADO AINDA A ARRUMAR
exports.Update = (req, res, next) => {
    const id = req.body.id; //vem pelo body pois será chamado atraves do pedido, que informa pelo body o id que recebe
    const qtdPedido = req.body.qtdPedido; //pq a qtd pedido q ele recebe
    const qtdEstoque = 

    Produto.findByPk(id)
        .then(produto => {
            if(produto) {
                produto.Update({
                    qtdEstoque: qtdEstoque
                },
                {
                    where: {id: id}
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