const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const Reader = sequelize.define('Reader', {
    reader_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    reader_name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    card_number: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    passport_number: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(128)
    },
    phone_number: {
        type: Sequelize.STRING(16),
        allowNull: false
    },
    is_having_degree: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    hall_id: {
        type: Sequelize.INTEGER
    },
    education_id: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Reader;