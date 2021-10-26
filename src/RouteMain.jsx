import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./redirect/Home";
import RedirectLogout from "./redirect/RedirectLogout";
import RedirectPostJob from "./redirect/RedirectPostJob";
import RedirectEmailVerify from "./redirect/RedirectEmailVerify";
import RedirectProfile from "./redirect/RedirectProfile";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import RedirectSignIn from "./redirect/RedirectSignIn";

const auth = getAuth();

class RouteMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} u={this.state.user} />
          <Route
            exact
            path="/signin"
            component={RedirectSignIn}
            u={this.state.user}
          />
          <Route
            exact
            path="/evs"
            component={RedirectEmailVerify}
            u={this.state.user}
          />
          <Route
            exact
            path="/dashtwo"
            component={RedirectPostJob}
            u={this.state.user}
          />
          <Route
            exact
            path="/dashone"
            component={RedirectProfile}
            u={this.state.user}
          />
          <Route
            exact
            path="/logout"
            component={RedirectLogout}
            u={this.state.user}
          />
        </Switch>
      </>
    );
  }
}

export default RouteMain;
