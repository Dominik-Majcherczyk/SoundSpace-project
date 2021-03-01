const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema({
  playlistName: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "user" },
  songs: { type: Schema.Type.ObjectId, ref: "song" },
});

const Playlist = mongoose.model("playlist", playlistSchema);

module.exports = Playlist;
