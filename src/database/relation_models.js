const Book = require('./models/Book');
const Publisher = require('./models/Publisher');
const Author = require('./models/Author');
const Hall = require('./models/Hall');
const Education = require('./models/Education'); 
const Reader = require('./models/Reader');
const BookReader = require('./models/BookReader');
const BookHall = require('./models/BookHall');


Publisher.hasMany(Book, { foreignKey: 'publisher_id' });
Book.belongsTo(Publisher, { foreignKey: 'publisher_id' });

Hall.hasMany(Reader, { foreignKey: 'hall_id' });
Reader.belongsTo(Hall, { foreignKey: 'hall_id' });

Education.hasMany(Reader, { foreignKey: 'education_id' });
Reader.belongsTo(Education, { foreignKey: 'education_id' });

Book.belongsToMany(Reader, { through: BookReader, foreignKey: 'book_id' });
Reader.belongsToMany(Book, { through: BookReader, foreignKey: 'reader_id' });
BookReader.hasMany(Book, { foreignKey: 'book_id' });
BookReader.hasMany(Reader, { foreignKey: 'reader_id' });

Book.belongsToMany(Hall, { through: BookHall, foreignKey: 'book_id' });
Hall.belongsToMany(Book, { through: BookHall, foreignKey: 'hall_id' });
BookReader.hasMany(Book, { foreignKey: 'book_id' });
BookReader.hasMany(Hall, { foreignKey: 'hall_id' })

Book.belongsToMany(Author, { through: 'book_author', foreignKey: 'book_id', timestamps: false });
Author.belongsToMany(Book, { through: 'book_author', foreignKey: 'author_id', timestamps: false });

module.exports = {
    Book,
    Publisher,
    Author,
    Hall,
    Education,
    Reader,
    BookReader,
    BookHall
}