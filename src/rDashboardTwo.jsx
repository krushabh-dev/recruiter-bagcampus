import React, { useState } from "react";
import Nav from "./src-app/Nav";
import "./src-app/card.css";
import fire from "./config/fire";
// import fire from ""
import { getDatabase, ref, set } from "firebase/database";

var dt = new Date().getTime();
var uuid = "xxxx-xxxx-xx".replace(/[xy]/g, function (c) {
  var r = (dt + Math.random() * 16) % 16 | 0;
  dt = Math.floor(dt / 16);
  return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
});

//class rDashboardTwo extends React.Component {
//   Collab() {
//   //const u_id = document.querySelector("#u_id").value;
//   const categories = document.querySelector("#categories").value;
//   const title = document.querySelector("#title").value;
//   const repeat = document.querySelector("#repeat").value;
//   const description = document.querySelector("#description").value;
//   const qualification = document.querySelector("#qualification").value;
//   const additionalinfo = document.querySelector("#additionalinfo").value;
//   const organization_name =
//     document.querySelector("#organization_name").value;
//   const headquater = organization_name + " , " + repeat + " , India";
//   //const organization_logo = document.querySelector("#organization_logo").value;
//   // const organization_url = document.querySelector("#organization_url").value;
//   // const linktoapply = document.querySelector("#linktoapply").value;
//   const validthrough = document.querySelector("#validthrough").value;
//   const dateposted = new Date();
//   const employmentType = document.querySelector("#employmentType").value;
//   const jobLocationType = document.querySelector("#jobLocationType").value;

//   document.getElementById("fdata").innerHTML =
//     '<table className="table"> <thead> <tr> <th scope="col" className="col-2"> # </th> <th scope="col" className="col-3"> Field </th> <th scope="col" className="col-7"> Input </th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td className="out-heading">categories</td> <td>' +
//     categories +
//     '</td> </tr> <tr> <th scope="row">2</th> <td className="out-heading">title</td> <td>' +
//     title +
//     '</td> </tr> <tr> <th scope="row">3</th> <td className="out-heading">location</td> <td>' +
//     repeat +
//     '</td> </tr> <tr> <th scope="row">4</th> <td className="out-heading">description</td> <td>' +
//     description +
//     '</td> </tr> <tr> <th scope="row">5</th> <td className="out-heading">qualification</td> <td>' +
//     qualification +
//     '</td> </tr> <tr> <th scope="row">6</th> <td className="out-heading">additionalinfo</td> <td>' +
//     additionalinfo +
//     '</td> </tr> <tr> <th scope="row">7</th> <td className="out-heading">headquater</td> <td>' +
//     headquater +
//     '</td> </tr> <tr> <th scope="row">8</th> <td className="out-heading">organization logo</td> <td> + <img src="' +
//     // organization_logo
//     +'" alt="organization_name" srcset="" width="100px" height="100px" /> </td> </tr> */ <tr> <th scope="row">9</th> <td className="out-heading">organization name</td> <td>' +
//     organization_name +
//     '</td> </tr> <tr> <th scope="row">10</th> <td className="out-heading">organization url</td> <td>' +
//     //  organization_url
//     +'</td> </tr> <tr> <th scope="row">11</th> <td className="out-heading">Link To Apply</td> <td>' +
//     //  linktoapply
//     +'</td> </tr> <tr> <th scope="row">12</th> <td className="out-heading">Valid Till</td> <td>' +
//     validthrough +
//     '</td> </tr> <tr> <th scope="row">13</th> <td className="out-heading">EmploymentnType</td> <td>' +
//     employmentType +
//     '</td> </tr> <tr> <th scope="row">14</th> <td className="out-heading">job Location Type</td> <td>' +
//     jobLocationType +
//     "</td> </tr> </tbody> </table>";
// }
const rDashboardTwo = (props) => {
  const [Key, setKey] = useState({
    title: "",
    location: "",
  });

  const keyInputEvent = (prop) => {
    const data = prop.target.value;
    const tname = prop.target.name;

    setKey((prevValue) => {
      // console.log(prevValue);
      console.log(tname + " : " + data);

      return {
        ...prevValue,
        [tname]: data,
      };
    });
  };

  //render() {
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
                      <span id="uid-load">
                        <div id="uid-genrate">
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            name="uid"
                            id="u_id"
                            value={uuid}
                            hidden
                          />
                        </div>
                      </span>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="basicInput">Title</label>
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Enter Job Title"
                          />
                        </div>
                        <div className="form-group">
                          <label for="basicInput">Organisation Name</label>
                          <input
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="organization_name"
                            name="organization_name"
                            placeholder="Enter Organisation Name"
                          />
                        </div>

                        <div className="form-group">
                          <label for="basicInput">Select Location</label>
                          <select
                            onChange={keyInputEvent}
                            name="location"
                            id="repeat"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" selected="" hidden="">
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
                          <label for="basicInput">Select Category</label>
                          <select
                            onChange={keyInputEvent}
                            name="repeat"
                            id="categories"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" selected="" hidden="">
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
                          <label for="helpInputTop">Expected Payscale</label>
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
                                  className="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                                <span className="input-group-text">₹</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label for="helpInputTop">Expected Expiry Date</label>
                          <span id="expected-expiry-date">
                            <input
                              onChange={keyInputEvent}
                              type="date"
                              name="validthrough"
                              id="validthrough"
                              placeholder="Expected End (Expiry) Date"
                              className="form-control create-alert-input"
                              value="2002-01-07"
                              required=""
                            />
                          </span>
                        </div>
                        <div className="form-group">
                          <label for="helpInputTop">Employment Type</label>
                          <select
                            onChange={keyInputEvent}
                            name="employmentType"
                            id="employmentType"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" selected="" hidden="">
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
                          <label for="helpInputTop">Job Location Type</label>
                          <select
                            onChange={keyInputEvent}
                            name="jobLocationType"
                            id="jobLocationType"
                            className="form-control create-alert-input"
                            required=""
                          >
                            <option value="" selected="" hidden="">
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
                          <label for="disabledInput">Description</label>
                          <textarea
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Description"
                            rows="8"
                            cols="50"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="disabledInput">Qualification</label>
                          <textarea
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="qualification"
                            name="qualification"
                            placeholder="Qualification"
                            rows="5"
                            cols="50"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="disabledInput">
                            Additional Information
                          </label>
                          <textarea
                            onChange={keyInputEvent}
                            type="text"
                            className="form-control"
                            id="additionalinfo"
                            name="additionalinfo"
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
                            onClick={this.Collab}
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
        tabindex="-1"
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
              <div id="fdata"></div>
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
//}

// const rDashboardTwo = () => {
//   const MakeJobPost = () => {
//     function isOnline() {
//       if (navigator.onLine) {
//         console.log("Online User");
//         const u_id = document.querySelector("#u_id").value;
//         const categories = document.querySelector("#categories").value;
//         const title = document.querySelector("#title").value;
//         const repeat = document.querySelector("#repeat").value;
//         const description = document.querySelector("#description").value;
//         const qualification = document.querySelector("#qualification").value;
//         const additionalinfo = document.querySelector("#additionalinfo").value;
//         const headquater = document.querySelector("#headquater").value;
//         const organization_name =
//           document.querySelector("#organization_name").value;
//         const organization_logo =
//           document.querySelector("#organization_logo").value;
//         const organization_url =
//           document.querySelector("#organization_url").value;
//         const linktoapply = document.querySelector("#linktoapply").value;
//         const validthrough = document.querySelector("#validthrough").value;
//         const dateposted = document.querySelector("#dateposted").value;
//         const employmentType = document.querySelector("#employmentType").value;
//         const jobLocationType =
//           document.querySelector("#jobLocationType").value;
//       } else {
//         alert("Make Sure You Are Connected With Internet!");
//       }
//     }
//   };

//   const addToDb = () => {
//     document.querySelector("##AddDb").click(function () {
//       const u_id = document.querySelector("#u_id").value;
//       const categories = document.querySelector("#categories").value;
//       const title = document.querySelector("#title").value;
//       const repeat = document.querySelector("#repeat").value;
//       const description = document.querySelector("#description").value;
//       const qualification = document.querySelector("#qualification").value;
//       const additionalinfo = document.querySelector("#additionalinfo").value;
//       const headquater = document.querySelector("#headquater").value;
//       const organization_name =
//         document.querySelector("#organization_name").value;
//       const organization_logo =
//         document.querySelector("#organization_logo").value;
//       const organization_url =
//         document.querySelector("#organization_url").value;
//       const linktoapply = document.querySelector("#linktoapply").value;
//       const validthrough = document.querySelector("#validthrough").value;
//       const dateposted = document.querySelector("#dateposted").value;
//       const employmentType = document.querySelector("#employmentType").value;
//       const jobLocationType = document.querySelector("#jobLocationType").value;

//       if (navigator.onLine) {
//         const db = getDatabase();
//         set(ref(db, "users/" + u_id), {
//           u_id: u_id,
//           categories: categories,
//           title: title,
//           location: repeat,
//           description: description,
//           qualification: qualification,
//           additionalinfo: additionalinfo,
//           headquater: headquater,
//           organization_name: organization_name,
//           organization_logo: organization_logo,
//           organization_url: organization_url,
//           linktoapply: linktoapply,
//           validthrough: validthrough,
//           dateposted: dateposted,
//           employmentType: employmentType,
//           jobLocationType: jobLocationType,
//         })
//           .then(() => {
//             // Sign-out successful.
//             alert("Data Successfully Entered!");
//           })
//           .catch((error) => {
//             alert("Error Ocured: " + error);
//           });
//       } else {
//         alert("Make Sure You Are Connected With Internet!");
//       }
//     });
//   };
// };

export default rDashboardTwo;
