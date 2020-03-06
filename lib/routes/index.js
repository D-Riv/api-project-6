const express = require("express");
const router = express.Router();

router.use("/list", require("./listRoute"));

module.exports = router;
