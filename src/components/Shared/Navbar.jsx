import React from "react";
import { useState, useEffect } from 'react';
import "../Assets/css/navbar.css";
import logo from "../Assets/images/logo.svg";
import hambuger from "../Assets/images/hamburger.svg";
import bell from "../Assets/images/bell.svg";
import Navi from "../Assets/images/navigation.svg";
import Profile from "../Assets/images/profile.svg";
import logout from "../Assets/images/logout icon.png";
import { useNavigate } from "react-router-dom";
import { removeEmpIdCookie, removeAuthTokenCookie } from "../Auth/Cookie";
import { useDataContext } from "../../Context/DataContext";
// import { useDataContext } from "../../Context/DataContext"
 

const Navbar = ({ onToggle }) => {
  const { roleWiseData } = useDataContext(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    removeEmpIdCookie();
    removeAuthTokenCookie();
    navigate("/");
  };
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); 
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);
  const emp_name = roleWiseData ? roleWiseData[0].EMP_NAME : null;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
        <div className="container-fluid " id="nav-card">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2" id="nav-card">
                <img src={logo} alt="logo" />
                <button className="btn-hamburger openbtn" onClick={onToggle}>
                  <img src={hambuger} alt="logo" />
                </button>
              </div>
              <div className="col-md-2 pt-1">
                <h5 className="nav-h4">Welcome,{emp_name}</h5>
                <p>
                  Quarter <span>:</span>
                  
                  <strong>
                    <span>{  roleWiseData ? roleWiseData[0].YEAR : null}</span>
                  </strong>
                </p>
              </div>
              <div className="col-md-2">
                <div id="third-nav" className="pt-1">
                  <div>
                    <p className="nav-para">
                      Channel<span>:</span> {  roleWiseData ? roleWiseData[0].CHANNEL_CODE : null}
                      <strong></strong>
                    </p>
                  </div>
                  <div className="nav-div">
                    <img src={Navi} alt="navi" /> <strong></strong>
                  </div>
                </div>
              </div>
              <div className="col-md-3 " id="nav-fourth">
                <button className="quarter">
                  Select Quarter{" "}
                  <span>
                    <i class="bi-arrow-down-square"></i>
                  </span>
                </button>
                <button type="button" class="btn btn-group" id="nav-sixth">
                  <img src={bell} alt="bell" width="15%" height="15%" />
                  {/* <span className="ribbon">9</span> */}
                </button>
              </div>
              <div className="col-md-3" id="nav-fifth">
                <ul className="list-unstyled m-0">
                  <li id="nav-admin">
                    <img
                      src={Profile}
                      alt="..."
                      width="25%"
                      height="25%"
                      className="mt-4"
                    />
                    <div className="m-2 w-100">
                      <h5 className="nav-heading">Role :{ roleWiseData ? roleWiseData[0].EMP_ROLE : null} </h5>
                      <p>{formattedDateTime}</p>
                    </div>
                  </li>
                </ul>
                <div className="col-md-2">
                  <button
                    className="text-center btn-logout"
                    onClick={handleLogout}
                  >
                    <img src={logout} alt="logout" />
                  </button>
                  <strong>Logout</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
