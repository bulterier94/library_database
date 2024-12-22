const { 
    Reader,
} = require('../database/relation_models'); 
const sequelize = require('../db'); 
const { Op, literal } = require('sequelize');

async function query8() { 
    const result = await Reader.count({
        where: {
            birth_date: {
                [Op.gt]: sequelize.literal("CURRENT_DATE - INTERVAL '20 YEARS'")
            }
        }
    });
    return result; 
}

module.exports = async () => {
    try {
        const result = await query8();
        return result;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};