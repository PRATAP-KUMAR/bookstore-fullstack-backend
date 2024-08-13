import express from 'express';
import { getBooks, getBook, createBook, deleteBook, updateBook } from '../controllers/booksController.js';

const booksRouter = express.Router();

// Route for Saving a new Book
booksRouter.post('/', createBook);

// Route for Getting all books
booksRouter.get('/', getBooks);

// Route for Getting one book from database by id
booksRouter.get('/:id', getBook);

// Route for Updating a book
booksRouter.patch('/:id', updateBook);

// Route for Deleting a book
booksRouter.delete('/:id', deleteBook);

export default booksRouter;