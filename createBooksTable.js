import pool from "./db.js";

const createBooksTable = async () => {
    try {
        const tableName = 'books';
        const text = `create table if not exists ${tableName}(id serial primary key, title varchar not null, author varchar not null, year int not null, created_at timestamp, updated_at timestamp)`;
        await pool.query(text);
    } catch (error) {
        console.log('Cant create table', error);
    }
}

export default createBooksTable;
