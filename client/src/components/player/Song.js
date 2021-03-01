import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      {currentSong && (
        <img
          className={isPlaying ? "rotateSong" : ""}
          src={currentSong.cover}
          alt=""
        />
      )}
      {currentSong && <h2>{currentSong.songName}</h2>}
      {currentSong && <h3>{currentSong.artist}</h3>}

      {console.log(currentSong)}
    </div>
  );
};

export default Song;
