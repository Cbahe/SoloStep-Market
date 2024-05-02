const express = require("express");
const router = express.Router();


router.use('/shoe', require('./shoe'));

module.exports = router;