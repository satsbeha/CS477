const express = require('express');
const bookRouter = require('./routes/book');

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

app.listen(3000, () => console.log('listening to 3000...'));