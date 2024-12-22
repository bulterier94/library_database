const {
    Book,
    Reader,
    BookReader
} = require('../database/relation_models');
const sequelize = require('../db');

async function query4(readerName, bookName) {

    const result = await Reader.findAll({
        attributes: [
            'reader_name',
        ],
        include: [
            {
                model: Book,
                through: {
                    attributes: [
                        'pin_date',
                        'return_date',
                    ],
                },
                required: true,
                attributes: [
                    'book_name',
                ],
                where: {
                    book_name: bookName,
                }
            }
        ],
        where: {
            reader_name: readerName,
        },
    });

    if (!result.length)
        return null;
    return result;
}


module.exports = async (readerName, bookName) => {
    try {
        const result = await query4(readerName, bookName);
        const filteredResult = result.map(item => ({ 
            reader_name: item.reader_name,
            book_name: item.Books[0]?.book_name,
            pin_date: item.Books[0]?.BookReader.pin_date,
            return_date: item.Books[0]?.BookReader.return_date,
        }));
        return filteredResult;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
