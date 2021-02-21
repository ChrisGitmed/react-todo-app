require('dotenv/config');
const express = require('express');

const app = express();

app.get('/api/todos', (req, res, next) => {
  res.status(200).send('it works!');
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
