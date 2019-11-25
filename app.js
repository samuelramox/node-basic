const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url =
  'mongodb+srv://admin:<password>@clusterapi-wsstp.mongodb.net/test?retryWrites=true&w=majority';
const options = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 5,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
  console.log('Aplicacão conectada ao banco de dados');
});
mongoose.connection.on('disconnected', () => {
  console.log('Aplicacão desconectada do banco de dados');
});
mongoose.connection.on('error', err => {
  console.log('Erro na conexão com o banco de dados', err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

const server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);

module.exports = app;
