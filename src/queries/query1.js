const {
    Book,
    Reader
} = require('../database/relation_models');
const sequelize = require('../db');

async function query1(readerName) {

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
                    ],
                    where: {
                        return_date: null,
                    }
                },
                required: true,
                attributes: [
                    'book_name',
                ]
            }
        ],
        where: {
            reader_name: readerName,
        },
        raw: true,
    });

    if (!result.length)
        return null;
    return result;
}


module.exports = async (readerName) => {
    try {
        const result = await query1(readerName);
        const filteredResult = result.map(item => ({
            reader_name: item['reader_name'],
            book_name: item['Books.book_name'],
            pin_date: item['Books.BookReader.pin_date'],
        }))
        return filteredResult;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
