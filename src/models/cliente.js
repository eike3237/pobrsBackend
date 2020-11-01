const Sequelize = require ('sequelize');

const sequelize = require('../database/database.js');

const Cliente = sequelize.define("cliente", {
    id:{
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
            isEmail: true //tava len 11, 100
        },
        unique: true // opcional
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(16), //- --------------------- TIRAR 
        validate:{
            min: 6
        },
      },
    telefone:{ // ERRO -> Só ta armazenando NULL
        allowNull: true,
        type: Sequelize.STRING(30),
        validate: {
            len: [1, 25]
        }
    },
    cpf:{ // só ta dando dentro do range qnd coloco numero menor q 11 caracteres pq n sei
        allowNull: false,
        type: Sequelize.STRING(16),
        validate: {
            len: [10, 60] //Acho que após minhas att para deixar do tipo String está inutil
        },
        unique: true
    },
    cep:{
        allowNull: false,
        type: Sequelize.STRING(15),// INTEGER ACEITA ATÉ 10 DIGITOS
        validate: {
            len: [7, 10]
        }
    }
},
{
    indexes: [
        {
            unique: true,
            fields: ['email', 'password', 'cpf']
        }
    ]
});

module.exports = Cliente;