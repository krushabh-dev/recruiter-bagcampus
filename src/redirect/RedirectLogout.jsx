import React, { Component } from "react";
import Login from "../Login";
import LogOut from "../LogOut";
import fire from "../config/fire";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();
class RedirectLogout extends Component {
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
        {this.state.user ? <LogOut /> : <Login />}
        {/* <Login /> */}
        <section id="Home_Page"></section>
      </>
    );
  }
}

export default RedirectLogout;
