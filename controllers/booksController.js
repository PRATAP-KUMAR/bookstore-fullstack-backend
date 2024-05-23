import { Book } from "../models/bookModel.js";

// create a new book
const createBook = async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        })
    }
}

// get books
const getBooks = async (request, response) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 })
        return response.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

// get book
const getBook = async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        })
    }
}

// update book
const updateBook = async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({
                message: 'Book not found'
            });
        }
        return response.status(200).send({
            message: 'Book updated successfully'
        })
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

// delete book
const deleteBook = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({
            message: 'Book deleted successfully'
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}

export { createBook, getBooks, getBook, updateBook, deleteBook }