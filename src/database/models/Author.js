const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const Author = sequelize.define('Author', {
    author_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    author_name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Author;