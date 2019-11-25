const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

const server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);

module.exports = app;
