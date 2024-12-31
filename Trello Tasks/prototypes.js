// Завдання:

// Реалізуйте систему управління бібліотекою книг. Створіть конструктор Book, який має властивості title, author, і year. Потім створіть конструктор EBook, який наслідує Book і додає властивість fileSize та метод для завантаження книги. Додайте метод для виведення інформації про книгу (title і author) в прототип Book і переконайтесь, що EBook успадковує цей метод.

// Вимоги:

// Використовуйте прототипи для наслідування.

// Додайте метод для виведення інформації про книгу до прототипу Book.

// Створіть метод для завантаження електронної книги в конструкторі EBook.

// Переконайтесь, що метод для виведення інформації про книгу працює для об'єктів EBook.
const Book = function (title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
};
const EBook = function (title, author, year, fileSize) {
  Book.call(this, title, author, year);
  this.fileSize = fileSize;
};

EBook.prototype = Object.create(Book.prototype);

Book.prototype.getInfo = function () {
  console.log(`"${this.title}" - ${this.author}`);
};

EBook.prototype.download = function () {
  console.log(`Downloading "${this.title}" (${this.fileSize})MB`);
};

const book1 = new Book("Babel", "Rebecca Kuang", 2022);
// book1.getInfo();
const ebook1 = new EBook("House of Flame and Shadow", "Sarah J. Maas", 2023, 5);
// ebook1.getInfo();
// ebook1.download();
