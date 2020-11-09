const Sequelize = require ('sequelize');

const sequelize = require('../database/database.js');

const Cliente = sequelize.define("cliente", {
    
    idCliente:{
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
    end:{
        allowNull: false,
        type: Sequelize.STRING(255),
        validate:{
            len: [8, 100]
        }
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING(200),
        validate:{
            isEmail: true 
        },
        unique: true 
    },
    telefone:{ 
        allowNull: true,
        type: Sequelize.STRING(30),
        validate: {
            len: [1, 25]
        }
    },
    cpf:{ 
        allowNull: false,
        type: Sequelize.STRING(16),
        validate: {
            len: [10, 60]
        },
        unique: true
    },
    cep:{
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
            len: [7, 10]
        }
    }
},
{
    indexes: [
        {
            unique: true,
            fields: ['email', 'cpf']
        }
    ]
});

module.exports = Cliente;