const express = require("express");
const authMiddelware = require("../middleware/authMiddelware");
const {
  bloodGroupDetailsContoller,
} = require("../controller/analyticsController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsContoller);

module.exports = router;
