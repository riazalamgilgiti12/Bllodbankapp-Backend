const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controller/authController");
const authMiddelware = require("../middleware/authMiddelware");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
