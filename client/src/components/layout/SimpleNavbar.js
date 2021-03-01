import React from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../auth/LogOutBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
const SimpleNavbar = () => {
  return (
    <nav className="simple">
      <h1>SoundSpace</h1>
      <div className="nav-buttons ">
        <Link to="/songs">
          <button>
            {`Add song${" "}`}
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          </button>
        </Link>
        <Link to="/player">
          <button>
            {`Player${" "}`}
            <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
          </button>
        </Link>
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default SimpleNavbar;
