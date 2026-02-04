const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    videoUrl: {
      type: String,
      required: true,
    },
    stage: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["free", "basic", "mid", "advance"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);
