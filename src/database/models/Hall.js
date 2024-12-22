const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const Hall = sequelize.define('Hall', {
    hall_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    hall_name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    hall_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Hall;