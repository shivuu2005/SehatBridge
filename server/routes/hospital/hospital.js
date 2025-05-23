const express = require("express");
const { authenticateToken } = require("../../middlewares/authMiddleware.js");
const {
  createHospital,
  searchHospitalByQuery,
  getHospitalByID,
  updateHospitalByID,
  deleteHospitalByID,
} = require("../../controllers/hospital/hospitalController.js");
const router = express.Router();
const { registerEmergency } = require("../../controllers/hospital/emergencyController");



router.post("/", createHospital);
router.get("/", searchHospitalByQuery);
router.get("/:id", getHospitalByID);
router.post("/emergency", registerEmergency);

// These are protected routes and needs authentication from now on
router.patch("/:id", authenticateToken, updateHospitalByID);
router.delete("/:id", authenticateToken, deleteHospitalByID);

module.exports = router;
