const express = require("express");
const app = express();

const router = require('./routes/shoe')

app.use(express.json());
app.use("/api/shoe", router);

module.exports = app;