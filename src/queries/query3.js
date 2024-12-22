const {
    Book
} = require('../database/relation_models');
const sequelize = require('../db');

async function query3(bookName) {

    const result = await Book.findAll({
        attributes: [
            'book_name',
            'cipher',
        ],
        where: {
            book_name: bookName,
        },
        raw: true,
    });

    return result ? result : null; 
}


module.exports = async (cipher) => {
    try {
        const result = await query3(cipher);
        const filteredResult = result.map(item => ({
            cipher: item['cipher'],  
            book_name: item['book_name'],  
        })) 
        return filteredResult;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};