import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faPlusCircle,
  faSignInAlt,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ setLibraryStatus, libraryStatus }) => {
  const { loggedIn } = useContext(AuthContext);
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <nav>
      <h1>SoundSpace</h1>
      <div className="nav-buttons">
        {loggedIn === false && (
          <>
            <Link to="/login">
              <button>
                {`Login${" "}`}
                <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
              </button>
            </Link>
            <Link to="/register">
              <button>
                {`Register${" "}`}
                <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
              </button>
            </Link>
          </>
        )}
        {loggedIn === true && (
          <>
            <button
              className={libraryStatus ? "library-active" : ""}
              onClick={openLibraryHandler}
            >
              {`Library${" "}`}
              <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </button>
            <Link to="/songs">
              <button>
                {`Add song${" "}`}
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
              </button>
            </Link>
            <LogOutBtn />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
