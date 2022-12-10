const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// set view engine
app.set('view engine', 'ejs');
// Built-in middleware
app.use(express.static('public'));
// parsing middleware
app.use(express.urlencoded({ extended: true }));

// view list contact
app.get('/', (req, res) => {
  // need to add load contact
  res.render('contact', {
    layout: 'views/contact',
    title: 'Halaman Contact',
    //flash message
  });
});

// view about
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'views/about',
    title: 'Halaman About',
  });
});

// view tambah contact
app.get('/addContact', (req, res) => {
  res.render('addContact', {
    layout: 'views/addContact',
    title: 'Form Tambah Data Contact',
  });
});

// view update contact
app.get('/updateContact', (req, res) => {
  res.render('updateContact', {
    layout: 'views/updateContact',
    title: 'Update Data Contact',
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
