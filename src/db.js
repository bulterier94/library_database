const { Sequelize } = require('sequelize');

module.exports = new Sequelize('library', 'postgres', '4123', {
    host: 'localhost',
    dialect: 'postgres',
});
