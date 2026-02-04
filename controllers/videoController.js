const Video = require("../models/Video");

// POST VIDEO
exports.addVideo = async (req, res) => {
  try {
    const { videoUrl, stage, type } = req.body;

    if (!videoUrl || stage === undefined || !type) {
      return res.status(400).json({
        success: false,
        message: "videoUrl, stage and type are required",
      });
    }

    const video = await Video.create({ videoUrl, stage, type });

    res.status(201).json({
      success: true,
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// GET ALL VIDEOS
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: 1 });

    const formatted = videos.map((v, i) => ({
      id: i + 1,
      videoUrl: v.videoUrl,
      stage: v.stage,
      type: v.type,
    }));

    res.status(200).json({
      success: true,
      count: formatted.length,
      data: formatted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// GET BY STAGE
exports.getByStage = async (req, res) => {
  try {
    const stage = Number(req.params.stage);
    const videos = await Video.find({ stage });

    res.status(200).json({
      success: true,
      count: videos.length,
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
