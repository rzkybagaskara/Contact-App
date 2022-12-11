const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contact-app',
});

connection.connect((err) => {
  if (!err) console.log('Berhasil terhubung ke database...');
  else console.log('Gagal terhubung ke database!' + JSON.stringify(err, undefined, 2));
});

module.exports = connection;
