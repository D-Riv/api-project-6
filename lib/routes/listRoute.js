const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");
const { check } = require("express-validator/check");

router.get("/index", listController.index);
router.get("/rating/:rating", listController.showRating);
router.get("/network/:network", listController.showNetwork);
router.get("/show/:show", listController.showOne);

router.post(
  "/submit",
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
