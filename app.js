const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const { PORT = 3000 } = process.env;

const path = require('path');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const pageNotFoundRoute = require('./routes/PageNotFound');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.user = {
    _id: '5fe37be287e71126a8b57312',
  };

  next();
});

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('/', pageNotFoundRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
