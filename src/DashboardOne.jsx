import React from "react";
import Nav from "./src-app/Nav";
import "./src-app/card.css";
import step1 from "./asset/steps/1.png";
import step2 from "./asset/steps/2.png";
import step3 from "./asset/steps/3.png";
import step4 from "./asset/steps/4.png";

const A = " ";
const DashboardOne = () => {
  // props.j ? <DashboardOne /> : <Login />;
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
              <div className="card-group">
                <div className="card">
                  <div className="card-content">
                    <img
                      className="card-img-top img-fluid"
                      src={step1}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Create Your Account</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <img
                      className="card-img-top img-fluid"
                      src={step2}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Verify Your Mail</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <img
                      className="card-img-top img-fluid"
                      src={step3}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Post Your Job</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <img
                      className="card-img-top img-fluid"
                      src={step4}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Hire Candidate Easily</h4>
                      <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </p>
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

export default DashboardOne;
