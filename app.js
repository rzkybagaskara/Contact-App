const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const connection = require('./model/connectDB');
const bodyParser = require('body-parser');
const checkDuplicate = require('./utils/check');
const app = express();
const port = 8000;

// set view engine
app.set('view engine', 'ejs');
// built in middleware
app.use(express.static('public'));
// parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));

// konfigurasi flash message
app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 6000 },
  })
);
app.use(flash());

// request db connection
app.use((req, res, next) => {
  req.db = connection;
  next();
});

// root page
app.get('/', (req, res) => {
  const sqlShow = 'SELECT * FROM table_kontak ORDER BY nama_lengkap ASC';
  connection.query(sqlShow, (err, result) => {
    const contacts = JSON.parse(JSON.stringify(result)); //parsing data
    res.render('contact', {
      title: 'Halaman Contact',
      layout: 'views/contact',
      contacts,
      msg: req.flash('msg'),
    });
  });
});

// halaman tambah contact
app.get('/addContact', (req, res) => {
  res.render('addContact', {
    layout: 'views/addContact',
    title: 'Form Tambah Data Contact',
  });
});

// proses insert contact
// gimana caranya biar si parser ke defined buat error
app.post('/addContact', (req, res) => {
  const sqlAdd = `INSERT INTO table_kontak (npm, nama_lengkap, kelas, email) VALUES ( '${req.body.npm}', '${req.body.nama_lengkap}', '${req.body.kelas}', '${req.body.email}')`;
  connection.query(sqlAdd, (err, result) => {
    if (err) throw err;
    // if (err) {
    //   req.flash('msg', 'NPM sudah ada di dalam database!');
    // }
    // // cek duplikat
    // const duplicate = checkDuplicate(req.body.npm);
    // if (duplicate) {
    //   throw new Error('NPM sudah ada di dalam daftar contact!');
    // }
    req.flash('msg', 'Data telah berhasil ditambahkan');
    res.redirect('/');
  });
});

// halaman update contact
app.get('/updateContact/:npm', (req, res) => {
  const npmSQL = `SELECT * FROM table_kontak WHERE npm = '${req.params.npm}'`;
  connection.query(npmSQL, (err, result) => {
    const contacts = JSON.parse(JSON.stringify(result));
    // akses array contacts
    const contact = contacts[0];
    res.render('updateContact', {
      layout: 'views/updateContact',
      title: 'Update Data Contact',
      contact,
    });
  });
});

// proses update contact
app.post('/updateContact', (req, res) => {
  const sqlUpdate = `UPDATE table_kontak SET npm = '${req.body.npm}', nama_lengkap = '${req.body.nama_lengkap}', kelas = '${req.body.kelas}', email = '${req.body.email}' WHERE npm = '${req.body.oldNPM}'`;
  connection.query(sqlUpdate, (err, result) => {
    if (err) throw err;
    // if (err) {
    //   req.flash('msg', 'NPM sudah ada di dalam database!');
    // }
    req.flash('msg', 'Data telah berhasil di-update');
    res.redirect('/');
  });
});

// delete contact
app.get('/deleteContact/:npm', (req, res) => {
  const sqlDelete = `DELETE FROM table_kontak WHERE npm = '${req.params.npm}'`;
  connection.query(sqlDelete, (err, result) => {
    if (err) throw err;
    req.flash('msg', 'Data telah berhasil dihapus');
    res.redirect('/');
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'views/about',
    title: 'Halaman About',
  });
});

// default view
// app.use('/', (req, res) => {
//   res.status(404);
//   res.send('<h1>Page not found, 404 <h1>');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
