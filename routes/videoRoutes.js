const express = require("express");
const router = express.Router();
const {
  addVideo,
  getAllVideos,
  getByStage,
} = require("../controllers/videoController");

router.post("/", addVideo);
router.get("/", getAllVideos);
router.get("/stage/:stage", getByStage);

module.exports = router;
