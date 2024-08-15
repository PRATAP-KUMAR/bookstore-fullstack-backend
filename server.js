import express from "express";
import booksRouter from "./routes/booksRouter.js";
import cors from 'cors';
import pool from "./db.js";
import createBooksTable from "./createBooksTable.js";

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    next();
});

// routes
app.use('/books', booksRouter);

// check connection
let connection;

try {
    connection = await pool.connect();
    connection.release();
}
catch (error) {
    console.log(error);
}

// DB
if (connection) {
    createBooksTable(); // create books table if it does not exist in the database
    app.listen(3000, () => {
        console.log('connected to db, listening on port 3000');
    })
} else {
    console.log('connection error, please check credentials in the db.js file.')
}