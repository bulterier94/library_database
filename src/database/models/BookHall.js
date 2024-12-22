const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const BookHall = sequelize.define('BookHall', {
    book_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hall_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = BookHall;