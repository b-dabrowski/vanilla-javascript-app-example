const books = {};

const bookRepository = {
  async createOrUpdate(book) {
    books[book.isbn] = book;
    return books[book.isbn];
  },

  async findOne(isbn) {
    return books[isbn];
  },

  async findAll() {
    return books;
  },
  
  async delete(isbn) {
    delete books[isbn];
  },
};

export { bookRepository };
