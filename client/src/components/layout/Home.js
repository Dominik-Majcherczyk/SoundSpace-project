import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Home = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="homeWrapper">
      <div className="buttons-box">
        {loggedIn === false && (
          <>
            <Link to="/login">
              <button className="homeButton">Login</button>
            </Link>

            <Link to="/register">
              <button className="homeButton">Register</button>
            </Link>
          </>
        )}
        {loggedIn === true && (
          <>
            <Link to="/songs">
              <button className="homeButton">Add Song</button>
            </Link>

            <Link to="/player">
              <button className="homeButton">Player</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
<div></div>;
