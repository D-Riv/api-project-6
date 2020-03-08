const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

//@route    GET api/list
//@desc     Display list

router.get("/", listController.index);
router.post("/", listController.create);
// router.get("/:name", listController.showName);
// router.post("/", listController.create);
// router.put("/:name", listController.edit);
// router.delete("/:name", listController.delete);

module.exports = router;
