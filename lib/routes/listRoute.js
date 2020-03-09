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

module.exports = router;
