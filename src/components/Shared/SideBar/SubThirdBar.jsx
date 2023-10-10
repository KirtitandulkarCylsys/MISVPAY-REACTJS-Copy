import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/Shared/Sidebar.css";
import Service_request from "../../Assets/images/Service request icon.png";
import statistics from "../../Assets/images/Statistics Report icon.png";
import stragies from "../../Assets/images/Strategic Alliance icon.png";
import Channel from "../../Assets/images/Channel Wise Sales icon.png";

const SubThirdBar = ({ isOpen }) => {
  return (
    <>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={Service_request} alt="home" className=" side-img p-1" />
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Service Request
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={statistics} alt="home" className=" side-img p-1" />{" "}
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Statistics Report
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={stragies} alt="home" className=" side-img p-1" />
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Strategic Alliance
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={Channel} alt="home" className=" side-img p-1" />
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Channel Wise Sales
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              {" "}
              PRM Sales Management
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default SubThirdBar;
