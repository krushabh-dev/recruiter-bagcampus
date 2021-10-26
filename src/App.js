import React, { Component } from "react";
import { ReactDOM } from "react";
import Login from "./Login";
import fire from "./config/fire";

class App extends Component {
  // constructor(props) {
  //   //this.
  // }

  render() {
    return (
      <>
        <Login />
        <section id="Home_Page"></section>
      </>
    );
  }
}

export default App;
