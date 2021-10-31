import React, { Component } from "react";
import Login from "../Login";
import SignIn from "../SignIn";
import fire from "../config/fire";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import DashboardOne from "../DashboardOne";

const auth = getAuth();
class RedirectSignIn extends Component {
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
        {this.state.user ? <DashboardOne /> : <SignIn />}
        {/* <Login /> */}
        <section id="Home_Page"></section>
      </>
    );
  }
}

export default RedirectSignIn;
