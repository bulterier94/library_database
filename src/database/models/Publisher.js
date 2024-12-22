const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const Publisher = sequelize.define('Publisher', {
    publisher_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    publisher_name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Publisher;