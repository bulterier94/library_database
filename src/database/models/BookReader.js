const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const BookReader = sequelize.define('BookReader', {
    book_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reader_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pin_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return_date: {
        type: Sequelize.DATE,
    },

}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = BookReader;