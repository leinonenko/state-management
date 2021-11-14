'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  console.log('cookies', req.cookies);
  res.render('home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
