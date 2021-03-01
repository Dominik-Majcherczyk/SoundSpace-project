const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  songName: { type: String, required: true },
  cover: { type: String, required: true },
  artist: { type: String, required: true },
  audio: { type: String, required: true },
  albumName: { type: String, required: true },
  id: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const Song = mongoose.model("song", songSchema);

module.exports = Song;
