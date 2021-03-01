import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SongForm = () => {
  const [songName, setSongName] = useState("");
  const [audio, setAudio] = useState("");
  const [cover, setCover] = useState("");
  const [artist, setArtist] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [songAdded, setSongAdded] = useState("");
  const [errors, setErrors] = useState("");

  async function saveSong(e) {
    e.preventDefault();
    setSongAdded("");
    setErrors("");
    try {
      const artistData = {
        artist,
      };
      const songData = {
        songName,
        cover,
        artist,
        albumName,
        audio,
        id: uuidv4(),
        active: false,
      };

      await axios
        .post("http://localhost:5000/song/artist", artistData)
        .then((result) => {
          console.log("artist added");
        })
        .catch((error) => {
          setErrors(error.response.data.errorMessage);
        });

      await axios
        .post("http://localhost:5000/song/", songData)
        .then((result) => {
          setSongAdded("Song added!");
          setSongName("");
          setAudio("");
          setCover("");
          setArtist("");
          setAlbumName("");
        })
        .catch((error) => {
          setErrors(error.response.data.errorMessage);
        });
    } catch (err) {
      console.log(err.res);
      setSongAdded("error");
    }
  }
  return (
    <div>
      <form className="box" onSubmit={saveSong}>
        <h1>ADD SONG</h1>
        <input
          className="input"
          type="text"
          placeholder="song name"
          onChange={(e) => setSongName(e.target.value)}
          value={songName}
        />
        <input
          className="input"
          type="text"
          placeholder="cover"
          onChange={(e) => setCover(e.target.value)}
          value={cover}
        />
        <input
          className="input"
          type="text"
          placeholder="artist"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
        />
        <input
          className="input"
          type="text"
          placeholder="link to audio"
          onChange={(e) => setAudio(e.target.value)}
          value={audio}
        />

        <input
          className="input"
          type="text"
          placeholder="album"
          onChange={(e) => setAlbumName(e.target.value)}
          value={albumName}
        />
        <p className="error">{errors}</p>
        <p className="success">{songAdded}</p>
        <button className="submit" type="submit">
          Save new sound
        </button>
      </form>
    </div>
  );
};

export default SongForm;
