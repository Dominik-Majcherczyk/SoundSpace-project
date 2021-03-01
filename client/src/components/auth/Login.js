import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      await axios
        .post("http://localhost:5000/auth/login", loginData)
        .then((result) => {
          console.log(result.data);
          getLoggedIn();
          history.push("/player");
        })
        .catch((error) => {
          setErrors(error.response.data.errorMessage);
        });
    } catch (err) {
      console.log(err.data);
    }
  }

  return (
    <div className="authWrapper">
      <form className="box" onSubmit={login}>
        <h1>LOGIN</h1>
        <input
          autoComplete="off"
          className="input"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          autoComplete="off"
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="submit" type="submit">
          {`Log in${" "}`}
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
        <p className="error">{errors}</p>

        <Link to="/register">
          <button className="changeForm">
            {`Register${" "}`}
            <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
<div></div>;
