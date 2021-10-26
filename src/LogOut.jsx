import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Login from "./Login";

const auth = getAuth();

const dologout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Succesfully Logged Out");
    })
    .catch((error) => {
      // An error happened.
    });
};

const LogOut = () => {
  return (
    <>
      Click To Confirm <button onClick={dologout}>Log Out</button>
    </>
  );
};

export default LogOut;
