const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.send(`
<html lang="en">
<form action="/admin/add-product" method="POST">
    <input type="text" name="title">
    <button type="submit">Add</button>
</form>    
</html>
`);
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
