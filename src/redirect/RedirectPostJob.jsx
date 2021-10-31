import React, { Component } from "react";
import Login from "../Login";
import DashboardTwo from "../DashboardTwo";
import fire from "../config/fire";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();
class RedirectPostJob extends Component {
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
        {(() => {
          if (this.state.user) {
            if (this.state.user.emailVerified == false) {
              return window.location.replace("http://localhost:3000/#/evs");
            }
          }
        })()}
        {this.state.user ? <DashboardTwo main={this.state.user} /> : <Login />}
        {/* <Login /> */}
        <section id="Home_Page"></section>
      </>
    );
  }
}

export default RedirectPostJob;
