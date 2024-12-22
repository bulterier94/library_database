
const {
    Book,
    Publisher,
    Author,
    Hall,
    Education,
    Reader,
    BookReader,
    BookHall
} = require('./relation_models');
const database = require('../db');


async function add_data() {
    try {
        await Publisher.bulkCreate([
            { publisher_name: 'АСТ' },
            { publisher_name: 'Эксмо' },
            { publisher_name: 'Молодая гвардия' },
            { publisher_name: 'Азбука-Аттикус' },
            { publisher_name: 'Проспект' },
            { publisher_name: 'Наука' },
        ]);

        await Author.bulkCreate([
            { author_name: 'Лев Толстой' },
            { author_name: 'Фёдор Достоевский' },
            { author_name: 'Михаил Булгаков' },
            { author_name: 'Иван Тургенев' },
            { author_name: 'Александр Пушкин' },
            { author_name: 'Антон Чехов' },
        ]);

        await Education.bulkCreate([
            { education_name: 'Среднее' },
            { education_name: 'Высшее' },
            { education_name: 'Кандидат наук' },
            { education_name: 'Доктор наук' },
            { education_name: 'Среднее профессиональное' },
            { education_name: 'Магистр' },
        ]);

        await Book.bulkCreate([
            { book_name: 'Война и мир', publisher_id: 1, publication_year: 1869, cipher: 'B001' },
            { book_name: 'Преступление и наказание', publisher_id: 2, publication_year: 1866, cipher: 'B002' },
            { book_name: 'Мастер и Маргарита', publisher_id: 3, publication_year: 1967, cipher: 'B003' },
            { book_name: 'Анна Каренина', publisher_id: 1, publication_year: 1877, cipher: 'B004' },
            { book_name: 'Отцы и дети', publisher_id: 4, publication_year: 1862, cipher: 'B005' },
            { book_name: 'Евгений Онегин', publisher_id: 5, publication_year: 1833, cipher: 'B006' },
            { book_name: 'Севастопольские рассказы', publisher_id: 1, publication_year: 1855, cipher: 'B007' },
            { book_name: 'Идиот', publisher_id: 2, publication_year: 1869, cipher: 'B008' },
            { book_name: 'Белая гвардия', publisher_id: 3, publication_year: 1925, cipher: 'B009' },
            { book_name: 'Записки охотника', publisher_id: 4, publication_year: 1852, cipher: 'B010' },
            { book_name: 'Пиковая дама', publisher_id: 5, publication_year: 1834, cipher: 'B011' },
            { book_name: 'Чайка', publisher_id: 6, publication_year: 1896, cipher: 'B012' },
        ]);

        await Hall.bulkCreate([
            { hall_name: 'Главный зал', hall_number: 1, capacity: 150 },
            { hall_name: 'Исторический зал', hall_number: 2, capacity: 75 },
            { hall_name: 'Зал научной литературы', hall_number: 3, capacity: 50 },
            { hall_name: 'Читальный зал', hall_number: 4, capacity: 30 },
            { hall_name: 'Зал периодики', hall_number: 5, capacity: 40 },
            { hall_name: 'Зал редких книг', hall_number: 6, capacity: 20 },
        ]);

        await Reader.bulkCreate([
            { reader_name: 'Олег Сикорский', card_number: 1234567890, passport_number: 987654321, birth_date: '1980-01-01', address: 'ул. Ленина, 1', phone_number: '+7-911-374-75-77', is_having_degree: true, hall_id: 1, education_id: 2 },
            { reader_name: 'Мария Петрова', card_number: 2345678901, passport_number: 876543210, birth_date: '2003-02-15', address: 'ул. Гагарина, 2', phone_number: '+7-921-343-12-01', is_having_degree: false, hall_id: 2, education_id: 1 },
            { reader_name: 'Алексей Сидоров', card_number: 3456789012, passport_number: 765432109, birth_date: '2005-03-10', address: 'ул. Победы, 3', phone_number: '+7-951-333-22-11', is_having_degree: true, hall_id: 3, education_id: 3 },
            { reader_name: 'Ольга Смирнова', card_number: 4567890123, passport_number: 654321098, birth_date: '1995-05-25', address: 'ул. Мира, 4', phone_number: '+7-921-552-11-22', is_having_degree: false, hall_id: 4, education_id: 4 },
            { reader_name: 'Артемий Шпак', card_number: 5678901234, passport_number: 543210987, birth_date: '1963-09-18', address: 'ул. Революции, 5', phone_number: '+7-999-123-45-67', is_having_degree: true, hall_id: 5, education_id: 5 },
            { reader_name: 'Дмитрий Чепасов', card_number: 6789012345, passport_number: 432109876, birth_date: '2007-12-30', address: 'ул. Ломоносова, 6', phone_number: '+7-822-321-45-76', is_having_degree: false, hall_id: 6, education_id: 6 },
        ]);

        await BookHall.bulkCreate([
            { book_id: 1, hall_id: 1, amount: 10 },
            { book_id: 2, hall_id: 2, amount: 1 },
            { book_id: 3, hall_id: 3, amount: 1 },
            { book_id: 3, hall_id: 4, amount: 1 },
            { book_id: 4, hall_id: 4, amount: 7 },
            { book_id: 5, hall_id: 5, amount: 6 },
            { book_id: 6, hall_id: 6, amount: 3 },
            { book_id: 7, hall_id: 1, amount: 5 },
            { book_id: 8, hall_id: 2, amount: 6 },
            { book_id: 9, hall_id: 3, amount: 4 },
            { book_id: 10, hall_id: 4, amount: 8 },
            { book_id: 11, hall_id: 5, amount: 2 },
            { book_id: 12, hall_id: 6, amount: 2 },
            { book_id: 12, hall_id: 2, amount: 5 },
        ], {
            ignoreDuplicates: true
        });

        await BookReader.bulkCreate([
            { book_id: 1, reader_id: 1, pin_date: '2024-12-01' },
            { book_id: 12, reader_id: 1, pin_date: '2024-11-03', return_date: '2024-12-01' },
            { book_id: 2, reader_id: 2, pin_date: '2024-11-29' },
            { book_id: 3, reader_id: 3, pin_date: '2024-10-15', return_date: '2024-12-11' },
            { book_id: 4, reader_id: 4, pin_date: '2024-06-20' },
            { book_id: 5, reader_id: 5, pin_date: '2024-08-22' },
            { book_id: 8, reader_id: 3, pin_date: '2024-09-13' },
            { book_id: 6, reader_id: 6, pin_date: '2024-11-25', return_date: '2024-12-01' },
        ], {
            ignoreDuplicates: true
        });

        await database.models.book_author.bulkCreate([
            { book_id: 1, author_id: 1 },
            { book_id: 2, author_id: 2 },
            { book_id: 3, author_id: 3 },
            { book_id: 4, author_id: 1 },
            { book_id: 5, author_id: 4 },
            { book_id: 6, author_id: 5 },
            { book_id: 7, author_id: 1 },
            { book_id: 8, author_id: 2 },
            { book_id: 9, author_id: 3 },
            { book_id: 10, author_id: 4 },
            { book_id: 11, author_id: 5 },
            { book_id: 12, author_id: 6 },
            
        ], {
            ignoreDuplicates: true
        });

        console.log('Data seeded successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
}

module.exports = add_data