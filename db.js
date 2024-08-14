import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'admin',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'bookstore',
});

const tableName = 'books';
const text = `create table if not exists ${tableName}(id serial primary key, title varchar not null, author varchar not null, year int not null, created_at timestamp, updated_at timestamp)`;

try {
  await pool.query(text);
}
catch (error) {
  console.log(error);
}

export default pool;