import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [errors, setErrors] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios
        .post("http://localhost:5000/auth/", registerData)
        .then((result) => {
          console.log(result.data);
          getLoggedIn();
          history.push("/player");
        })
        .catch((error) => {
          setErrors(error.response.data.errorMessage);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="authWrapper">
      <form onSubmit={register} className="box">
        <h1>REGISTER</h1>
        <input
          className="input"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="input"
          type="password"
          placeholder="Verify Password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button className="submit" type="submit">
          {`Submit${" "}`}
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
        <p className="error">{errors}</p>
        <Link to="/login">
          <button className="changeForm">
            {`Login${" "}`}
            <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
<div></div>;
