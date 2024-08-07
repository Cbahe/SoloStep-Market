const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('dist'));


app.listen(1234, () => {
  console.log('Server listening at http://localhost:1234');
});