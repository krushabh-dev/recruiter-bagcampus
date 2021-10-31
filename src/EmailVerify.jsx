import React from "react";
import fire from "./config/fire";
import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth();

const mailtra = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("Verification Email is Sent On Email");
    })
    .catch((err) => {
      alert("An Error Occured : " + err);
    });
};

const EmailVerify = () => {
  return (
    <>
      <div>
        You Must Verify Your Email Address
        <button onClick={mailtra}> Send Auth Link</button>
      </div>
      Already Have Verified?
    </>
  );
};

export default EmailVerify;
