'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const session = require('express-session');


const username = 'foo';
const password = 'bar';

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.get('/', (req, res) => {
  console.log('cookies', req.cookies);
  console.log('session', req.session);
  res.render('home');
});

app.get('/setCookie/:clr', (req,res)=>{
  res.cookie('color', req.params.clr);
  res.send('cookie set');
});

app.get('/getCookie', (req, res) => {
  console.log('cookies', req.cookies);
  res.send(color is ${req.cookies.color});
});
app.get('/deleteCookie', (req, res) => {
  res.clearCookie('color');
  console.log('cookies', req.cookies);
  res.send('delete cookie color');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
