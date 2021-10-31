import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import fire from "./config/fire";
import "./Login.css";
import google from "./asset/logo/google.svg";

const auth = getAuth();

class SignIn extends React.Component {
  signUp() {
    const email = document.querySelector("#email-input").value;
    const password = document.querySelector("#Password-input").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Sign In:" + user);
        //redirect to email verification /evs
        window.location.replace("http://localhost:3000/#/evs");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(
          "Error. ErrorCode" + errorCode + "errorMessage" + errorMessage
        );
        alert("An Error Occured: " + errorCode.toString());
      });
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="form-container">
            <div className="form-body">
              <h2 className="title">Sign in with</h2>
              <div className="social-login">
                <ul>
                  <li className="google">
                    <a href="#">
                      <i className="uil uil-google"></i> Google
                    </a>
                  </li>
                  <li className="fb">
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </div>
              <div className="_or">or</div>
              <div className="the-form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email-input"
                  placeholder="Enter Your Email Address"
                  name="email"
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="Password-input"
                  placeholder="Enter Your Password Address"
                  className="form-control"
                  name="Password"
                />

                <input
                  type="submit"
                  value="Create Account"
                  onClick={this.signUp}
                />
              </div>
            </div>

            <div className="form-footer">
              <div>
                <span>Already have an account?</span>
                <a href="/">Log In</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="step1">
          <input
            type="text"
            id="email-input"
            placeholder="Enter Your Email Address"
            className="form-control"
            name="email"
          />
          <input
            type="text"
            id="Password-input"
            placeholder="Enter Your Password Address"
            className="form-control"
            name="Password"
          />
          <button id="ep-submission" onClick={this.dologin}>
            Login
          </button>
          <button id="ep-submission" onClick={this.signUp}>
            SignUp
          </button>
        </div> */}
      </>
    );
  }
}

// const Login = () => {
//   const [Key, setKey] = useState({
//     email: "",
//   });

//   const keyInputEvent = (prop) => {
//     const data = prop.target.value;
//     const tname = prop.target.name;

//     setKey((prevValue) => {
//       // console.log(prevValue);
//       console.log(tname + " : " + data);

//       return {
//         ...prevValue,
//         [tname]: data,
//       };
//     });
//   };

//   const keyInputEmail = (prop) => {
//     const email = Key.email;

//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (Key.email.match(mailformat)) {
//       alert("Valid email address!");
//     } else {
//       alert("Please Enter Proper Email Address");
//     }
//     console.log(email);
//   };

//   return (
//     <>
//       <div className="step1">
//         <input
//           type="text"
//           id="email-input"
//           placeholder="Enter Your Email Address"
//           className="form-control"
//           name="email"
//           value={Key.email}
//           onChange={keyInputEvent}
//         />
//         <button id="email-submission" onClick={keyInputEmail}>
//           Move Ahead
//         </button>
//       </div>
//     </>
//   );
// };

export default SignIn;
