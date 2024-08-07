const express = require('express');
const app = express();
app.use(express.static('dist'));


app.listen(1234, () => {
  console.log('Server listening at http://localhost:1234');
});