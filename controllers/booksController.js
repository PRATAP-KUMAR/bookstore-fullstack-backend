import pool from "../db.js";

// create a new book
const createBook = async (request, response) => {

    const { title, author, year } = request.body;

    try {
        if (!title || !author || !year) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, year'
            });
        }

        const text = 'insert into books values(default, $1, $2, $3)';
        const values = [title, author, year];

        const res = await pool.query(text, values);
        console.log(res.rows);

        return response.status(201).send({ message: 'new book created' });
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
        const res = await pool.query('select * from books');
        const books = res.rows;
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
        const query = {
            name: 'fetch-book',
            text: 'select * from books where id = $1',
            values: [id]
        }
        const res = await pool.query(query);
        const book = res.rows[0];
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
    const { title, author, year } = request.body;
    console.log(request.body);

    try {
        if (!title || !author || !year) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, year'
            });
        }

        const { id } = request.params;

        let query = {
            name: 'update book',
            text: 'update books set title = $1, author = $2, year = $3 where id = $4',
            values: [title, author, year, id]
        }

        const res = await pool.query(query);
        console.log(res);

        if (!res) {
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

        const text = 'delete from books where id = $1';
        const values = [id];

        const res = await pool.query(text, values);

        if (!res) {
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

export { getBooks, getBook, createBook, deleteBook, updateBook }