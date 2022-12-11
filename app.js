const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const connection = require('./model/connectDB');
const app = express();
const port = 8000;

// set view engine
app.set('view engine', 'ejs');
// built in middleware
app.use(express.static('public'));
// parsing middleware
app.use(express.urlencoded({ extended: true }));

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
  const sqlShow = 'SELECT * FROM table_kontak';
  connection.query(sqlShow, (err, result) => {
    const contacts = JSON.parse(JSON.stringify(result));
    console.log(contacts);
    res.render('contact', {
      title: 'Halaman Contact',
      layout: 'views/contact',
      contacts,
    });
  });
});

// tambah contact
app.get('/addContact', (req, res) => {
  res.render('addContact', {
    layout: 'views/addContact',
    title: 'Form Tambah Data Contact',
  });
});

// update contact
app.get('/updateContact', (req, res) => {
  res.render('updateContact', {
    layout: 'views/updateContact',
    title: 'Update Data Contact',
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
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>Page not found, 404 <h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
