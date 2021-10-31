import React, { useState } from "react";
import Nav from "./src-app/Nav";
import "./src-app/card.css";
import fire from "./config/fire";

var dt = new Date().getTime();
var uuid = "xxxx-xxxx-xx".replace(/[xy]/g, function (c) {
  var r = (dt + Math.random() * 16) % 16 | 0;
  dt = Math.floor(dt / 16);
  return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
});

const DashboardTwo = (props) => {
  var date = new Date();
  date.setMonth(date.getMonth() + 1);
  var y = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  var month = date.getMonth() + 1;
  var x = date.getFullYear() + "-" + month + "-" + date.getDate();

  if (date.getMonth() < 10) {
    if (date.getDate() <= 9) {
      const DayToday = "0" + date.getDate();
      var month = date.getMonth() + 1;
      const MonthToday = "0" + month;
      var expiryDate = date.getFullYear() + "-" + MonthToday + "-" + DayToday;
    } else {
      const DayToday = date.getDate();
      var month = date.getMonth() + 1;
      const MonthToday = "0" + month;
      var expiryDate = date.getFullYear() + "-" + MonthToday + "-" + DayToday;
    }
  } else {
    if (date.getDate() <= 9) {
      const DayToday = "0" + date.getDate();
      const MonthToday = date.getMonth() + 1;
      var expiryDate = date.getFullYear() + "-" + MonthToday + "-" + DayToday;
    } else {
      const DayToday = date.getDate();
      const MonthToday = date.getMonth() + 1;
      var expiryDate = date.getFullYear() + "-" + MonthToday + "-" + DayToday;
    }
  }
  const [Key, setKey] = useState({
    title: "",
    category: "",
    organization_name: "",
    location: "",
    category: "",
    minPayscale: "",
    maxPayscale: "",
    validthrough: expiryDate,
    employmentType: "",
    jobLocationType: "",
    description: "",
    qualification: "",
    additionalinfo: "",
    uid: uuid,
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

  const ValidateForm = () => {
    if (
      (Key.title == "") |
      (Key.organization_name == "") |
      (Key.location == "") |
      (Key.category == "") |
      (Key.minPayscale == "") |
      (Key.maxPayscale == "") |
      (Key.validthrough == "") |
      (Key.employmentType == "") |
      (Key.jobLocationType == "") |
      (Key.description == "") |
      (Key.qualification == "") |
      (Key.additionalinfo == "")
    ) {
      alert("Fill All Data Properly");
      document.getElementById("AddDb").disabled = true;
      document.getElementById("clickedconfirmonmodal").disabled = true;
    } else {
      document.getElementById("AddDb").disabled = false;
      document.getElementById("clickedconfirmonmodal").disabled = false;
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
                    <h4 className="card-title">Post Free Job</h4>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      {/* <span id="uid-load">
                        <div id="uid-genrate">
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            name="uid"
                            value={Key.uid}
                            id="u_id"
                            value={uuid}
                            hidden
                          />
                        </div>
                      </span> */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="basicInput">Title</label>
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={Key.title}
                            placeholder="Enter Job Title"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="basicInput">Organisation Name</label>
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="organization_name"
                            name="organization_name"
                            value={Key.organization_name}
                            placeholder="Enter Organisation Name"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="basicInput">Select Location</label>
                          <select
                            onChange={keyInputEvent}
                            name="location"
                            value={Key.location}
                            id="repeat"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" defaultValue="" hidden="">
                              Location
                            </option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Noida">Noida</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Multiple">Multiple</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="basicInput">Select Category</label>
                          <select
                            onChange={keyInputEvent}
                            name="category"
                            value={Key.category}
                            id="categories"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" defaultValue="" hidden="">
                              Category
                            </option>
                            <option value="Internships">Internships</option>
                            <option value="Government Jobs">
                              Government Jobs
                            </option>
                            <option value="Software Jobs">Software Jobs</option>
                            <option value="Work From Home">
                              Work From Home
                            </option>
                            <option value="Part Time Jobs">
                              Part Time Jobs
                            </option>
                            <option value="Marketing and Sales Jobs">
                              Marketing and Sales Jobs
                            </option>
                            <option value="Others">Others</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="helpInputTop">
                            Expected Payscale
                          </label>
                          <small className="text-muted">
                            eg.<i>₹8LPA-₹12LPA</i>
                          </small>
                          <div className="row">
                            <div className="col-sm-6 mb-1">
                              <div className="input-group mb-3">
                                <span className="input-group-text">₹</span>
                                <input
                                  onChange={keyInputEvent}
                                  type="text"
                                  id="minPayscale"
                                  name="minPayscale"
                                  value={Key.minPayscale}
                                  className="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 mb-1">
                              <div className="input-group">
                                <input
                                  onChange={keyInputEvent}
                                  type="text"
                                  id="maxPayscale"
                                  name="maxPayscale"
                                  value={Key.maxPayscale}
                                  className="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                                <span className="input-group-text">₹</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="helpInputTop">
                            Expected Expiry Date
                          </label>
                          <span id="expected-expiry-date">
                            <input
                              onChange={keyInputEvent}
                              type="date"
                              name="validthrough"
                              value={Key.validthrough}
                              id="validthrough"
                              placeholder="Expected End (Expiry) Date"
                              className="form-control create-alert-input"
                              required=""
                            />
                          </span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="helpInputTop">Employment Type</label>
                          <select
                            onChange={keyInputEvent}
                            name="employmentType"
                            value={Key.employmentType}
                            id="employmentType"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" defaultValue="" hidden="">
                              Employment Type
                            </option>
                            <option value="FULL_TIME">Full-Time</option>
                            <option value="PART_TIME">Part-Time</option>
                            <option value="CONTRACTOR">Contractor</option>
                            <option value="TEMPORARY">Temporary</option>
                            <option value="INTERN">Intern</option>
                            <option value="VOLUNTEER">Volunteer</option>
                            <option value="PER_DIEM">PER_DIEM</option>
                            <option value="OTHER">OTHER</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="helpInputTop">
                            Job Location Type
                          </label>
                          <select
                            onChange={keyInputEvent}
                            name="jobLocationType"
                            value={Key.jobLocationType}
                            id="jobLocationType"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" defaultValue="" hidden="">
                              Job Location Type
                            </option>
                            <option value="TELECOMMUTE">Remote Job</option>
                            <option value="INOFFICE">In Office</option>
                            <option value="UNDEFINED">Undefined</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="disabledInput">Description</label>
                          <textarea
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={Key.description}
                            placeholder="Description"
                            rows="8"
                            cols="50"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="disabledInput">Qualification</label>
                          <textarea
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="qualification"
                            name="qualification"
                            value={Key.qualification}
                            placeholder="Qualification"
                            rows="5"
                            cols="50"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="disabledInput">
                            Additional Information
                          </label>
                          <textarea
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="additionalinfo"
                            name="additionalinfo"
                            value={Key.additionalinfo}
                            placeholder="Additional Information"
                            rows="5"
                            cols="50"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <button
                            className="form-control my-4"
                            id="postJobB"
                            className="create-alert-btn"
                            data-toggle="modal"
                            data-target="#finalConfiModal"
                            onClick={ValidateForm}
                          >
                            Make Job Post
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
      <div
        className="modal fade"
        id="finalConfiModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="finalConfiModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title w-100" id="finalConfiModalLabel">
                Please Confirm Data
              </h5>
              <small>
                If You Find Something Missing/Wrong Click on Cancel or Close
              </small>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="fdata">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="col-2">
                        #
                      </th>
                      <th scope="col" className="col-3">
                        Field
                      </th>
                      <th scope="col" className="col-7">
                        Input
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td className="out-heading">categories</td>
                      <td>{Key.category}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td className="out-heading">title</td>
                      <td>{Key.title}</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td className="out-heading">location</td>
                      <td>{Key.location}</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td className="out-heading">description</td>
                      <td>{Key.description}</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td className="out-heading">qualification</td>
                      <td>{Key.qualification}</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td className="out-heading">additionalinfo</td>
                      <td>{Key.additionalinfo}</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td className="out-heading">headquater</td>
                      <td>
                        {Key.organization_name}, {Key.location}, India
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td className="out-heading">organization logo</td>
                      <td>
                        <img
                          src="' +
    // organization_logo
    "
                          alt="organization_name"
                          srcSet=""
                          width="100px"
                          height="100px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td className="out-heading">organization name</td>
                      <td>{Key.organization_name}</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td className="out-heading">organization url</td>
                      <td>None</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td className="out-heading">Link To Apply</td>
                      <td>None</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td className="out-heading">Valid Till</td>
                      <td>{Key.validthrough}</td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td className="out-heading">EmploymentnType</td>
                      <td>{Key.employmentType}</td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td className="out-heading">job Location Type</td>
                      <td>{Key.jobLocationType}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="clickedconfirmonmodal"
              >
                Confirm
              </button>
              <span id="finalclickmodal" className="d-none">
                <button
                  type="button"
                  className="create-alert-btn"
                  id="AddDb"
                  data-dismiss="modal"
                >
                  Add To Database
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTwo;
