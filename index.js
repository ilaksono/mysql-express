const path = require('path');
const PATH = path.resolve((__dirname, ".env." + 'development'));

require('dotenv').config({ path: PATH });
process.env.NODE_ENV = 'development';
console.log(process.env);
const mysql = require('mysql');
const app = require('express')();
const connect = mysql.createConnection({
  host: process.env.NODE_DB_HOST,
  user: process.env.NODE_DB_USER,
  password: process.env.NODE_DB_PASS,
  database: process.env.NODE_DB_DB
});

connect.connect();


app.listen(8080, () => console.log('listening 8080'));

app.get('/', (req, res) => res.send({ msg: 'hello' }));

app.get('/users', (req, res) => {
  connect.query(`
    SELECT * FROM users;
  `, (er, result, fields) => {
    console.log(`er ${er}, res ${result}, fields ${fields}`);
    console.log('connected by id: ', connect.threadId);
    res.send(result)
  });
});