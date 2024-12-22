const { Hall,
    Reader,
    Book,
    BookHall,
    BookReader,
} = require('../database/relation_models');
const sequelize = require('../db');

async function query6() {

    const sql = `
        SELECT 
            r.reader_name, 
            b.book_name
        FROM "Reader" r
            LEFT JOIN "BookReader" br ON r.reader_id = br.reader_id
            INNER JOIN "Book" b ON br.book_id = b.book_id
            INNER JOIN "BookHall" bh ON b.book_id = bh.book_id
        WHERE br.return_date is NULL
        GROUP BY r.reader_name, b.book_name
        HAVING SUM(bh.amount) <= 2;
    `;
    const result = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });

    if (!result.length)
        return null;
    return result;
}


module.exports = async () => {
    try {
        const result = await query6();
        return result;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};
