import express from "express";
import mongoose from "mongoose";
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
mongoose.connect(process.env.mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });