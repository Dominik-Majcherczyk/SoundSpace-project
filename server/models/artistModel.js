const mongoose = require("mongoose");
const artistSchema = new mongoose.Schema({
  artist: { type: String, required: true },
});

const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;
