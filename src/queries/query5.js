const {
    Book,
    Reader,
} = require('../database/relation_models');
const sequelize = require('../db');
const { Op } = require('sequelize');

async function query5() {

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

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
                    where: {
                        return_date: null,
                        pin_date: {
                            [Op.lt]: oneMonthAgo, 
                        }
                    }
                },
                required: true,
                attributes: [
                    'book_name',
                ],

            }
        ],
    });

    if (!result.length)
        return null;
    return result;
}


module.exports = async () => {
    try {
        const result = await query5();
        const filteredResult = result.map(item => ({ 
            reader_name: item.reader_name,
            book_name: item.Books[0]?.book_name,
            pin_date: item.Books[0]?.BookReader.pin_date,
            // return_date: item.Books[0]?.BookReader.return_date,
        }));
        return filteredResult;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
