const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
const usersRouter = require('./routes/users');
// const cardsRoutes = require('./routes/cards');
const pageNotFoundRoute = require('./routes/PageNotFound');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
// app.use('/', cardsRoutes);
app.use('/', pageNotFoundRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
