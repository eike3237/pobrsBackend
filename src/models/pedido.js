const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');
const Cliente = require('./cliente.js');

//ID do pedido, Numero do pedido, Data do pedido, Qtd, 
const Pedido = sequelize.define("pedidos", {
    idPedido:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomeProd:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    precoVenda:{
        allowNull: false,
        type: Sequelize.FLOAT(),
        validate:{
            len: [0, 100]
        }
    },
    catProduto:{
        allowNull: false,
        type: Sequelize.INTEGER(),
        validate: {
            len: [0, 99]
        }
    }, // TEM QUE TER UMA FK DA TABELA CLIENTE
    idCliente:{
        allowNull: true,
        type: Sequelize.INTEGER
    }
});

Cliente.hasMany(Pedido, {
    foreignKey: 'idCliente'
  });

Pedido.belongsTo(Cliente);

//Pedido.belongsTo(Cliente, {foreignKey: 'idCliente', allowNull: true});
//Pedido.belongsTo(Produto, {foreignKey: 'idProduto', allowNull: false});

module.exports = Pedido;