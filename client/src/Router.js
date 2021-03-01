import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
import Songs from "./components/songs/Songs";
import Player from "./components/player/Player";
import Home from "./components/layout/Home";
import "./styles/app.scss";
import SimpleNavbar from "./components/layout/SimpleNavbar";
const Router = () => {
  const [libraryStatus, setLibraryStatus] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/player">
              <Navbar
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
              />
              <Player
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
              />
            </Route>
            <Route path="/songs">
              <SimpleNavbar />
              <Songs />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
