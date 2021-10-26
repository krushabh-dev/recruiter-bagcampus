import React from "react";
import fire from "./config/fire";
import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth();

const mailtra = () => {
  const uverif = auth.emailVerified;
  if (uverif == false) {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Dear Candidate Please Check Mail");
    });
  } else {
    window.location.replace("http://localhost:3000/#/");
  }
};

const EmailVerify = () => {
  return (
    <>
      <div onLoad={mailtra}>
        We Have Sent You Verification Email
        <button onClick={mailtra}> Resend Password</button>
      </div>
      Already Have Verified?
    </>
  );
};

export default EmailVerify;
