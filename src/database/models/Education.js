const sequelize = require('../../db')
const { Sequelize } = require('sequelize')

const Education = sequelize.define('Education', {
    education_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    education_name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Education;