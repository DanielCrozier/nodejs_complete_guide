const http = require( 'http' );

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Start Express.js middleware functions
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
  res.send(`
<html lang="en">
<form action="/product" method="POST">
    <input type="text" name="title">
    <button type="submit">Add</button>
</form>    
</html>
`);
})

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello, World!</h1>');
})

// const server = http.createServer(app);
//
// server.listen(3000);

app.listen(3000);
