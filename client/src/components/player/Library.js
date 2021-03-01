import React from "react";
import Pagination from "./Pagination";
import LibrarySong from "./LibrarySong";

const Library = ({
  setCurrentPage,
  songsPerPage,
  currentPage,

  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {currentSongs.map((song) => (
          <LibrarySong
            songs={songs}
            cover={song.cover}
            songName={song.songName}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        songsPerPage={songsPerPage}
        totalSongs={songs.length}
      />
    </div>
  );
};

export default Library;
