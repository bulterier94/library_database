const {
    Book
} = require('../database/relation_models');
const sequelize = require('../db');

async function query2(cipher) {

    const result = await Book.findAll({
        attributes: [
            'book_name',
            'cipher',
        ],
        where: {
            cipher: cipher,
        },
        raw: true,
    });

    return result ? result : null; 
}


module.exports = async (cipher) => {
    try {
        const result = await query2(cipher);
        const filteredResult = result.map(item => ({ 
            book_name: item['book_name'],  
            cipher: item['cipher'],  
        })) 
        return filteredResult;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};