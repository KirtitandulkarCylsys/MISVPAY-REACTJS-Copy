import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/Shared/Sidebar.css";
import Retails_bank from "../../Assets/images/Retail Bank icon.png";
import Named_inst from "../../Assets/images/Named Inst icon.png";
import Digital_Team from "../../Assets/images/Digital Team icon.png";
import Manager_user from "../../Assets/images/manage user.png";

const SubSecondBar = ({ isOpen }) => {
  return (
    <>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={Retails_bank} alt="home" className=" side-img p-1" />
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Retail Bank
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={Named_inst} alt="home" className=" side-img p-1" />{" "}
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Named Inst
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={Digital_Team} alt="home" className=" side-img p-1" />
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              Digital Team
            </span>
          </div>
        </Link>
      </div>
      <div className="card" id="main-side-card">
        <Link className="side-link">
          <div className="side-home">
            <img src={Manager_user} alt="home" className=" side-img p-1" />
            <span className={`sidebar ${isOpen ? "" : "closed"}`}>
              {" "}
              Manager User
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default SubSecondBar;
