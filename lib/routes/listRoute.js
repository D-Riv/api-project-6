const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const { check } = require("express-validator/check");
//@route    GET api/list
//@desc     Display list

router.get("/", listController.index);
router.post(
  "/",
  [
    //validation requirements
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("url", "Include url to more information").isURL()
  ],
  listController.create
);
// router.get("/:name", listController.showName);
// router.post("/", listController.create);
// router.put("/:name", listController.edit);
// router.delete("/:name", listController.delete);

module.exports = router;
