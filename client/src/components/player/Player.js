import React, { useState, useRef, useEffect } from "react";

//Import Components
import PlayerControls from "./PlayerControls";
import Song from "./Song";
import Library from "./Library";

//Import data
import chillhop from "./../../data";
//Util
import { playAudio } from "./../../util";
import axios from "axios";

function Player({ setLibraryStatus, libraryStatus }) {
  //Ref
  const audioRef = useRef(null);

  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(6);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    console.log(songs);
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };

  async function getSongs() {
    const songsRes = await axios.get("http://localhost:5000/song/");
    await setSongs(songsRes.data);
  }

  useEffect(() => {
    getSongs();
  }, []);

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <PlayerControls
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        setCurrentPage={setCurrentPage}
        songsPerPage={songsPerPage}
        currentPage={currentPage}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      {currentSong && (
        <audio
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={songEndHandler}
        ></audio>
      )}
    </div>
  );
}

export default Player;
