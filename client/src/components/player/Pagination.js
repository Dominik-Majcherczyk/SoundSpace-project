import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Pagination = ({ songsPerPage, totalSongs, setCurrentPage }) => {
  const pageNumbers = [];
  const [number, setNumber] = useState(1);

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (number) => {
    if (number < pageNumbers.length) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
    setCurrentPage(number);
  };
  return (
    <div className="pagination">
      <button
        className="button-pagination"
        onClick={() => {
          paginate(number);
        }}
      >
        <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Pagination;
