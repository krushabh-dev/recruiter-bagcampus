import React, { Component } from "react";
import Login from "../Login";
import fire from "../config/fire";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import DashboardThree from "../DashboardThree";

const auth = getAuth();
class RedirectProfile extends Component {
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
            } else {
              return console.log(this.state.user);
            }
          }
        })()}

        {this.state.user ? (
          <DashboardThree
            email={this.state.user.email}
            phone={this.state.user.phoneNumber}
            displayName={this.state.user.displayName}
          />
        ) : (
          <Login />
        )}
        {/* <Login /> */}
        {}
        <section id="Home_Page"></section>
      </>
    );
  }
}

export default RedirectProfile;
