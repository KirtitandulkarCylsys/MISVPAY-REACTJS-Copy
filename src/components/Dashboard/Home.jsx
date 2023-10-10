import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar/SideBar";
import "../Assets/css/Dashboard/Home.css";
import pie from "../Assets/images/Retail.png";
import pie2 from "../Assets/images/Retail bank.png";
import pie3 from "../Assets/images/Strategic Alliance.png";
import overall from "../Assets/images/overall survey.png";
import overall2 from "../Assets/images/Overall Zone survey.png";
const Home = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="container-fluid p-0 home-main ">
        <Navbar onToggle={toggleSidebar} />
        <div className=" d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >
            <div style={{ marginLeft: "25px", marginRight: "20px" }}>
              <marquee behavior direction="left">
                <p className="marquee-p ">
                  ! Currently Displayed Data Is as of - June Some versions of
                  Microsoft Word also generate the text using the =lorem()
                  function. Just type it in your Word document and you will ge
                </p>
              </marquee>
              <div>
                <div class="accordion " id="accordionExample">
                  <div className="accordion-item acc-main">
                    <h2 className="accordion-header acc-main " id="headingOne">
                      <div>
                        <button
                          className="accordion-button acc-main"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <div className="mis-heading">MIS Updates</div>
                        </button>
                      </div>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse acc-main"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body acc-main">
                        <ul style={{ paddingRight: "20px", lineHeight: 2 }}>
                          <li>
                            you may now login to MIS VPAY using your AD
                            password, which is the same used to access other
                            application like HRMS etc..
                          </li>
                          <li>
                            sales data on display up to 20-jun-2023 on
                            Batchclose date for 202324Q1..
                          </li>
                          <li>
                            Addition of Newly Empanelled IFA's in the ARN master
                            is done till 19-jun-2023..
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4" id="piechart-row">
                  <div id="PieChart-card">
                    <img src={pie} alt="pie" className="w-100" />
                  </div>
                </div>

                <div className="col-md-4" id="piechart-row">
                  <div id="PieChart-card">
                    <img src={pie2} alt="pie" className="w-100" />
                  </div>
                </div>

                <div className="col-md-4" id="piechart-row">
                  <div id="PieChart-card">
                    <img src={pie3} alt="pie" className="w-100" />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginBottom: "22px" }}>
                <img src={overall} alt="overall" className="w-50" />
                <img src={overall2} alt="overall" className="w-50" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
