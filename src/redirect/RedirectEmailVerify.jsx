import React, { Component } from "react";
import Login from "../Login";
import fire from "../config/fire";
import EmailVerify from "../EmailVerify";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();
class RedirectEmailVerify extends Component {
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
            if (this.state.user.emailVerified == true) {
              return window.location.replace("http://localhost:3000/#/");
            }
          }
        })()}
        {this.state.user ? <EmailVerify /> : <Login />}
        {/* <Login /> */}
        <section id="Home_Page"></section>
      </>
    );
  }
}

export default RedirectEmailVerify;
