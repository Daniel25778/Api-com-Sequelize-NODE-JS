/* IMPORTA O MÓDULO DO sequelize */
const Sequelize = require('sequelize');

/* IMPORTA O ARQUIVO DE CONEXÃO COM BANCO DE DADOS */
const connection = require('../database/database');

const Usuario = connection.define(
    'tbl_cliente', {
        id_cliente: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        sobrenome: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        celular: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
    }
);

// Usuario.sync({ force: true });

module.exports = Usuario;