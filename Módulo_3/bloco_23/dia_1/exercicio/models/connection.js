const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'exemploUser',
});

module.exports = connection;
