import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/login");
  }
  return (
    <button onClick={logOut}>
      {`Logout${" "}`}
      <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
    </button>
  );
};

export default LogOutBtn;
