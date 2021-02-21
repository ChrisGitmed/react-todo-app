require('dotenv/config');
const express = require('express');
const pg = require('pg');
const errorMiddleware = require('./error-middleware');

const app = express();
const jsonMiddleware = express.json();
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonMiddleware);

app.get('/api/todos', (req, res, next) => {
  const sql = `
    select *
      from todos
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.post('/api/todos', (req, res, next) => {
  const { task } = req.body;
  const sql = `
    insert into todos (task)
         values ($1)
      returning *;
  `;
  const params = [task];
  db.query(sql, params)
    .then(result => res.status(201).json(result.rows[0]))
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
