const router = require("express").Router();
const Song = require("../models/songModel");
const Artist = require("../models/artistModel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const { songName, cover, artist, albumName, audio, id, active } = req.body;

    const newSong = new Song({
      songName,
      cover,
      artist,
      albumName,
      audio,
      id,
      active,
    });
    const existingSongName = await Song.findOne({ songName });
    if (!songName || !cover || !artist || !audio) {
      return res
        .status(400)
        .json({ errorMessage: "please all required fields." });
    }
    if (existingSongName) {
      return res
        .status(401)
        .json({ errorMessage: "the sound name is already exist" });
    }
    const savedSong = await newSong.save();

    res.json(savedSong);
    //console.log(res.json(savedSong));
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.post("/artist", auth, async (req, res) => {
  try {
    const { artist } = req.body;

    const newArtist = new Artist({
      artist,
    });
    const existingArtist = await Artist.findOne({ artist });

    if (existingArtist) {
      return res
        .status(401)
        .json({ errorMessage: "the artist name is already exist" });
    }
    const savedArtist = await newArtist.save();

    res.json(savedArtist);
    //console.log(res.json(savedSong));
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
