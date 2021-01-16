import React, { Component } from "react";

import AppRouter from "../../route";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default class index extends Component {
  render() {
    return (
      <>
        {/* Page Wrapper */}
        <div id="wrapper">
          <Sidebar />

          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <Header />
              <AppRouter />
            </div>
            {/* End of Main Content */}
            <Footer />
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}

        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </>
    );
  }
}
