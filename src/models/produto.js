const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Produto = sequelize.define("produto", {
    idProduto:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    precoCusto:{
        allowNull: false,
        type: Sequelize.FLOAT(),
        validate:{
            len: [0, 100]
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
            len: [0, 9999]
        }
    },
    descricao:{
        allowNull: true,
        type: Sequelize.STRING(500),
        validate: {
            len: [5, 250]
        }
    },
    linkImg:{
        allowNull: false,
        type: Sequelize.STRING(900),
        validate: {
            len: [20, 900]
        }
    }
},
{
    indexes: [
        {
            unique: true,
            fields: ['nome']
        }
    ]
});

module.exports = Produto;