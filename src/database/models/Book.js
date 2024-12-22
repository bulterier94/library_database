const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const Book = sequelize.define('Book', {
    book_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    book_name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    publisher_id: {
        type: Sequelize.INTEGER
    },
    publication_year: {
        type: Sequelize.INTEGER
    },
    cipher: {
        type: Sequelize.STRING(4),
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Book;