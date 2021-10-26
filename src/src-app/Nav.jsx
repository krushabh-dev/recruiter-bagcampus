import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import "./style.css";

const Nav = () => {
  return (
    <>
      <div id="sidebar" className="active d-none d-md-block">
        <div className="sidebar-wrapper active ps ps--active-y">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <NavLink activeClassName="active" to="to=/">
                  Bagcampus
                </NavLink>
              </div>
              <div className="toggler">
                <NavLink
                  activeClassName="active"
                  to="/"
                  className="sidebar-hide d-xl-none d-block"
                >
                  <i className="bi bi-x bi-middle"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu</li>

              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="/"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="/dashone"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>My Profile</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="/dashtwo"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Post Job</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="index.html"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Manage Candidate</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="index.html"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Previous Jobs</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="index.html"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Create Competition</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="index.html"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Donate</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink
                  activeClassName="active"
                  to="/logout"
                  className="sidebar-link"
                >
                  <i className="bi bi-grid-fill"></i>
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
