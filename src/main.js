const database = require('./db');
const add_data = require('./database/add_data');
const query1 = require('./queries/query1');
const query2 = require('./queries/query2');
const query3 = require('./queries/query3');
const query4 = require('./queries/query4');
const query5 = require('./queries/query5');
const query6 = require('./queries/query6');
const query7 = require('./queries/query7');
const query8 = require('./queries/query8');

const print_query = (...queries) => {
    let count = 1
    for (let query of queries) {
        console.log("Query", count, ":");
        console.log(JSON.stringify(query, null, 2))
        count += 1
    }
}

async function main() {
    await database.sync({ force: true });
    
    await database.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(error => console.log('Error: ' + error));

    await add_data();

    const result1 = await query1('Олег Сикорский');
    const result2 = await query2('B007');
    const result3 = await query3('Пиковая дама');
    const result4 = await query4('Артемий Шпак', 'Отцы и дети');
    const result5 = await query5();
    const result6 = await query6();
    const result7 = await query7();
    const result8 = await query8();

    print_query(
        result1,
        result2,
        result3,
        result4,
        result5,
        result6,
        result7,
        result8,
    );
}

main();
