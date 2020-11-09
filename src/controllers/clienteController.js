const Cliente = require('../models/cliente');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const endereco = req.body.end;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cpf = req.body.cpf;
    const cep = req.body.cep;

    Cliente.create({//colocando dentro do BD retirado do corpo da pagina
        // fazer aqui validação da qntd de numero do CPF
        nome: nome,
        end: endereco,
        email: email,
        telefone: telefone,
        cpf: cpf,
        cep: cep,

    })

        .then(cliente => {
            if (cliente){
                res.status(status.OK).send(cliente);
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })

        .catch(error => next(error));
};


exports.SelectAll = (req, res, next) => {
    Cliente.findAll()
        .then(cliente => {
            if(cliente) {
                res.status(status.OK).send(cliente);
            }
        })
        .catch(error => next(error));
};

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;//pegando o ID da URL

    Cliente.findByPk(id)
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next (error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const endereco = req.body.end;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cpf = req.body.cpf;
    const cep = req.body.cep;

    Cliente.findByPk(id)
        .then(cliente => {
            if(cliente) {
                cliente.update({
                    nome: nome,
                    end: endereco,
                    email: email,
                    telefone: telefone,
                    cpf: cpf,
                    cep: cep

                },
                {
                    where: {id: id}
                })
                .then (() =>{
                    res.status(status.OK).send();
                })
                .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(cliente => {
            if (cliente) {
                cliente.destroy({
                    where: {id:id}
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};