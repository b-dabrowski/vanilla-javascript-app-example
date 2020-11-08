import { bookRepository } from "./book.repository.js";

const bookController = {
  async createOrUpdate(req, res, next) {
    const { title, authors, isbn, description } = req.body;

    const newBook = await bookRepository.createOrUpdate({
      title,
      authors,
      isbn,
      description,
    });

    res.json(newBook);
  },
  
  async deleteOne(req, res, next) {
    const isbn = req.params.isbn;

    await bookRepository.delete(isbn);

    res.status(204).end();
  },

  async list(req, res, next) {
    const books = await bookRepository.findAll();

    res.json(books);
  },

  async details(req, res, next) {
    const isbn = req.params.isbn;

    const book = await bookRepository.findOne(isbn);

    res.json(book);
  },
};

export { bookController };
