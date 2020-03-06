const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router.get("/:premiered", listController.premieredDate);
// router.get("/:year", listController.showYear);
// router.get("/:name", listController.showName);
// router.post("/", listController.create);
// router.put("/:name", listController.edit);
// router.delete("/:name", listController.delete);

module.exports = router;
