import express from "express";
import booksRouter from "./routes/booksRouter.js";
import cors from 'cors';
import 'dotenv/config';

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/books', booksRouter);

// DB
app.listen(3000, () => {
    console.log('connected to db');
})