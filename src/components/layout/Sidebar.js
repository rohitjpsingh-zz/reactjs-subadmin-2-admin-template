import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {appendScript, removeScript} from '../../utils/manageScript'


function Sidebar() {
  useEffect(() => {
    appendScript("./assets/js/sb-admin-2.min.js");

    return () => {
        removeScript("./assets/js/sb-admin-2.min.js");
    }
  }, []);

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          BEST <sup>2</sup>
        </div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <NavLink className="nav-link" exact to="/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Addons</div>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/about-us">
          <i className="fas fa-fw fa-table" />
          <span>About Us</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
}

export default Sidebar;
