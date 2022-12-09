const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// menggunakan EJS
app.set('view engine', 'ejs');
// Built-in middleware
app.use(express.static('public'));
// parsing middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // need to add load contact
  res.render('contact', {
    layout: 'views/contact',
    title: 'Halaman Contact',
    //flash message
  });
});

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
