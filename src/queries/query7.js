const { 
    Reader,
} = require('../database/relation_models'); 
const sequelize = require('../db'); 

async function query7() { 
    const result = await Reader.count(); 
    return result; 
}

module.exports = async () => {
    try {
        const result = await query7();
        return result;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};