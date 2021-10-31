import React, { useState } from "react";
import fire from "./config/fire";
import Nav from "./src-app/Nav";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const auth = getAuth();
const db = getDatabase();

const DashboardThree = (props) => {
  const currentEmail = props.email;
  const currentPhone = props.phone;
  const currentDisplayName = props.displayName;

  const [Key, setKey] = useState({
    title: "",
    cEmail: currentEmail,
    date: new Date(),
  });

  const keyInputEvent = (prop) => {
    const data = prop.target.value;
    const tname = prop.target.name;

    setKey((prevValue) => {
      // console.log(prevValue);
      //console.log(tname : " + data);

      return {
        ...prevValue,
        [tname]: data,
      };
    });
  };

  const [pKey, setpKey] = useState({
    pEmail: currentEmail,
    pOname: currentDisplayName,
    date: new Date(),
  });

  const pkeyInputEvent = (prop) => {
    const data = prop.target.value;
    const tname = prop.target.name;

    setpKey((prevValue) => {
      // console.log(prevValue);
      //console.log(tname : " + data);

      return {
        ...prevValue,
        [tname]: data,
      };
    });
  };

  function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6}$/im;

    return re.test(input_str);
  }

  const intoDB = () => {
    var phone = Key.cPhone;
    var email = Key.cEmail;
    var oname = Key.cOname
    set(ref(db, "users/" + phone), {
      username: oname,
      email: email,
      phone: phone,
    })
      .then(() => {
        alert("Succesfully Updated.");
        console.log("Succesfully Updated.");
      })
      .catch((error) => {
        console.log("Error Occured : " + error);
        alert("Error Occured : " + error);
      });
  }

  function writeUserData(name, email, phone) {
    // console.log(name + " " + email + " " + phone);
    set(ref(db, "users/" + phone), {
      username: name,
      email: email,
      phone: phone,
    })
      .then(() => {
        alert("Succesfully Updated.");
        console.log("Succesfully Updated.");
      })
      .catch((error) => {
        console.log("Error Occured : " + error);
        alert("Error Occured : " + error);
      });
  }

  const sendOTP = (e) => {
    var phone = pKey.pPhone;
    var DisplayName = pKey.pOname;
    var email = pKey.pEmail;
    var phoneNumber = "91" + phone;
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      alert(phoneNumber + " is Invalid Data");
    } else {
      updateProfile(auth.currentUser, {
        phoneNumber: phoneNumber,
        displayName: DisplayName,
      })
        .then(() => {
          //alert("Succesfully Updated.");
        })
        .catch((error) => {
          alert("Error Occured : " + error);
        });

      writeUserData(DisplayName, email, phoneNumber);
      //console.log(DisplayName + " " + email + " " + phoneNumber);
    }
  };

  return (
    <>
      <Nav />
      <div className="dashboardone">
        <div className="welcomepart">
          <div className="conatainer">
            <div className="row w-100">
              <div className="col-12">
                <div className="card-group py-4 ml-3">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body">
                        <h2 className="card-title">Welcome</h2>
                        <p className="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row match-height">
            <div className="col-12">
              <div className="section">
                <div className="card mr-3">
                  <div className="card-header">
                    <h4 className="card-title">Profile Information</h4>
                  </div>

                  <div className="card-body">
                    <div className="row pt-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="basicInput">Your Email Address</label>
                          <input
                            onChange={pkeyInputEvent}
                            type="email"
                            className="form-control"
                            id="per-email"
                            name="pEmail"
                            value={pKey.pEmail}
                            disabled
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="basicInput">Contacting Phone</label>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            +91
                          </span>
                          <input
                            onChange={pkeyInputEvent}
                            type="text"
                            className="form-control"
                            id="per-phone"
                            name="pPhone"
                            value={pKey.pPhone}
                            placeholder="Enter Mobile Number"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="basicInput">Enter Your Full Name</label>
                        <input
                          onChange={pkeyInputEvent}
                          type="text"
                          className="form-control"
                          id="per-Oname"
                          name="pOname"
                          value={pKey.pOname}
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="col-md-6 pt-2">
                        <label htmlFor="basicInput">
                          Current Position in Company
                        </label>
                        <input
                          onChange={pkeyInputEvent}
                          type="text"
                          className="form-control"
                          id="per-Role"
                          name="pRole"
                          value={pKey.pRole}
                          placeholder="Enter Current Role eg. Founder"
                        />
                      </div>
                      <div className="col-md-6 pt-2">
                        <label htmlFor="basicInput">Current Location</label>
                        <input
                          onChange={pkeyInputEvent}
                          type="text"
                          className="form-control"
                          id="per-PLocation"
                          name="pLocation"
                          value={pKey.pLocation}
                          placeholder="Current Location"
                        />
                      </div>
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <button
                            className="form-control my-4 g-recaptcha"
                            id="postProfile"
                            className="create-alert-btn"
                            onClick={sendOTP}
                            data-sitekey="6Ld1TnIcAAAAAJWD5c-yWHsk-E3Jg5Ka8GrtAREN"
                            data-callback="onSubmit"
                            data-action="submit"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row match-height">
            <div className="col-12">
              <div className="section">
                <div className="card mr-3">
                  <div className="card-header">
                    <h4 className="card-title">About Company Details</h4>
                  </div>

                  <div className="card-body">
                    <div className="row pt-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="basicInput">Contacting Email</label>
                          <input
                            onChange={keyInputEvent}
                            type="email"
                            className="form-control"
                            id="corp-email"
                            name="cEmail"
                            value={Key.cEmail}
                            placeholder="Enter Corporate Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="basicInput">Contacting Phone</label>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            +91
                          </span>
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="corp-phone"
                            name="cPhone"
                            value={Key.cPhone}
                            placeholder="Enter Corporate Mobile Number"
                          />
                        </div>
                      </div>
                      <div
                        className="col-md-12 justify-content-center text-center"
                        style={{ background: "#f2f7ff" }}
                      >
                        <span>----------</span>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="basicInput">
                          Enter Organisation Name
                        </label>
                        <input
                          onChange={keyInputEvent}
                          type="text"
                          className="form-control"
                          id="corp-Oname"
                          name="cOname"
                          value={Key.cOname}
                          placeholder="Enter Organisation Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="basicInput">
                          Enter Organisation Home URL
                        </label>
                        <input
                          onChange={keyInputEvent}
                          type="text"
                          className="form-control"
                          id="corp-Ourl"
                          name="cOurl"
                          value={Key.cOurl}
                          placeholder="Enter Organisation Home URL"
                        />
                      </div>
                      <div className="col-md-12 pt-2">
                        <label htmlFor="basicInput">Enter URL For Logo</label>
                        <input
                          onChange={keyInputEvent}
                          type="text"
                          className="form-control"
                          id="corp-OLurl"
                          name="cOLurl"
                          value={Key.cOLurl}
                          placeholder="Enter URL For Logo"
                        />
                      </div>
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <button
                            className="form-control my-4"
                            id="postJobB"
                            className="create-alert-btn"
                            data-toggle="modal"
                            data-target="#finalConfiModal"
                            onClick={intoDB}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardThree;
