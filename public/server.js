const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
