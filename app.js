const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const pageNotFoundRoute = require('./routes/PageNotFound');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.use('/', pageNotFoundRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});