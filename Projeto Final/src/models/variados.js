
import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const variados = connection.define("variados", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    diretores: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, 
{
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
}
)