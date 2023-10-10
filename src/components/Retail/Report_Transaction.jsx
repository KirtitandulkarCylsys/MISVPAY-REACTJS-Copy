import React, { useState } from "react";
import "./Report_Transaction.css";
import datetime from "../Assets/images/Vector (Stroke).png";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";

const TransactionReport = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="container-fluid p-0 home-main ">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
        >
          <div className="bg-white card m-4">
            <div className="col-l-12  ">
              <div className=" rounded-lg p-3"></div>
              <button
                className="border-0 w-100 text-left bg-transparent "
                type="button"
              >
                <h5 className="headline">
                  <b>DAYWISE TRANSACTION REPORT</b>
                </h5>
              </button>
              <div>
                <div className="col-lg-12 d-flex justify-content-around mt-5 ">
                  <div className="form-group col-md-2">
                    <label
                      className="form-lables"
                      style={{ marginRight: "5px" }}
                    >
                      <b> A/C No </b>
                    </label>
                    <input type="text" className="form-control mt-2" placeholder="Enter A/C No"/>
                  </div>
                  <div className="form-group col-md-2">
                    <label
                      className="form-lables"
                      style={{ marginRight: "5px" }}
                    >
                      <b>PAN No</b>
                    </label>
                    <input type="text" className="form-control mt-2" placeholder="Enter PAN No"/>
                  </div>
                  <div className="form-group col-md-2">
                    <label className="form-lables">
                      <b>PIN Code</b>
                    </label>
                    <input type="text" className="form-control mt-2" placeholder="Enter PIN Code"/>
                  </div>
                  <div className="form-group col-md-2">
                    <label className="form-lables">
                      <b>ARN No</b>
                    </label>
                    <input type="text" className="form-control mt-2" placeholder="Enter ARN No"/>
                  </div>
                  <div className="form-group col-md-2 m-md-0 mt-3">
                    <label className="form-lables">
                      <b>SubARN No</b>
                    </label>
                    <input type="text" className="form-control mt-2" placeholder="Enter SubARN No"/>
                  </div>
                  <div />
                </div>
                <div>
                  <div className="col-lg-12 d-flex justify-content-around mt-5 ">
                    <div className="form-group col-md-2">
                      <label
                        className="form-lables"
                        style={{ marginRight: "5px" }}
                      >
                        <b> UFC</b>
                      </label>
                      <select
                        name=""
                        id="ab"
                        className="form-select form-control mt-2"
                      >
                        <option value="">Select</option>
                        <option value="">Arbitrage </option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label
                        className="form-lables"
                        style={{ marginRight: "5px" }}
                      >
                        <b>Amount</b>
                      </label>
                      <input type="text" className="form-control mt-2" placeholder="Enter Amount"/>
                    </div>
                    <div className="form-group col-md-2">
                      <label className="form-lables">
                        <b>Condition</b>
                      </label>
                      <select name="" id="ab" className="form-select form-control mt-2" >
                        <option value="">Select</option>
                        <option value="">Arbitrage </option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label className="form-lables">
                        <b>KARVY Location</b>
                      </label>
                      <input type="text" className="form-control mt-2" placeholder="Enter KARVY Location"/>
                    </div>
                    <div className="form-group col-md-2">
                      <label
                        className="form-lables"
                        style={{ marginRight: "5px" }}
                      >
                        <b> Start Date </b>
                      </label>
                      <img src={datetime} alt="datetime" />
                      <input type="date" className="form-control mt-2" />
                    </div>
                    <div />
                  </div>
                  <div>
                    <div className="col-lg-12 d-flex justify-content-around mt-5 ">
                      <div className="form-group col-md-2">
                        <label
                          className="form-lables"
                          style={{ marginRight: "5px" }}
                        >
                          <b> End Date </b>
                        </label>
                        <img src={datetime} alt="datetime" />
                        <input type="date" className="form-control mt-2" />
                      </div>
                      <div className="form-group col-md-2">
                        <label
                          className="form-lables"
                          style={{ marginRight: "5px" }}
                        >
                          <b>Scheme Code</b>
                        </label>
                        <input type="text" className="form-control mt-2" placeholder="Enter Scheme Code"/>
                      </div>
                      <div className="form-group col-md-2">
                        <label className="form-lables">
                          <b>RIA Code</b>
                        </label>
                        <input type="text" className="form-control mt-2" placeholder="Enter RIA Code"/>
                      </div>
                      <div className="form-group col-md-2">
                        <label className="form-lables">
                          <b>Trans RM Code</b>
                        </label>
                        <input type="text" className="form-control mt-2" placeholder="Enter Trans RM Code"/>
                      </div>
                      <div className="form-group col-md-2 m-md-0 mt-3">
                        <label className="form-lables">
                          <b>IHNO</b>
                        </label>
                        <input type="text" className="form-control mt-2" placeholder="Enter IHNO"/>
                      </div>
                      <div />
                    </div>
                    <div>
                      <div className="col-lg-12 d-flex justify-content-around mt-5 ">
                        <div className="form-group col-md-2">
                          <label
                            className="form-lables"
                            style={{ marginRight: "5px" }}
                          >
                            <b> Scheme Type </b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            className="form-select form-control mt-2"
                          >
                            <option value="">Select</option>
                            <option value="">Arbitrage </option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <label
                            className="form-lables"
                            style={{ marginRight: "5px" }}
                          >
                            <b>EUIN</b>
                          </label>
                          <input type="text" className="form-control mt-2" placeholder="Enter EUIN"/>
                        </div>
                        <div className="form-group col-md-2">
                          <label className="form-lables">
                            <b>Transaction Type</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            className="form-select form-control mt-2"
                          >
                            <option value="">Select</option>
                            <option value="">Arbitrage </option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <input
                            type="checkbox"
                            className="form-check-input mt-2"
                          />
                          <label className="form-label">
                            <b className="Check">BSF</b>
                          </label>
                        </div>
                        <div className="form-group col-md-2 m-md-0 mt-3">
                          <label className="form-lables">
                            <b>No Mapping</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            className="form-select form-control mt-2"
                          >
                            <option value="">Select</option>
                            <option value="">Arbitrage </option>
                          </select>
                        </div>
                        <div />
                      </div>
                      <div className="d-flex">
                        <div className="col-md-4 d-flex justify-content-between "></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex justify-content-around mt-5">
                          <div className="col-md-2 "></div>
                          <div className="col-md-2 ">
                            <button className="btn BgcolorOrange">
                              <b className="colorwhite">Search</b>
                            </button>
                          </div>
                          <div className="col-md-2">
                            <button className="btn BgcolorOrange">
                              <b className="colorwhite">Export</b>
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
      </div>
    </div>
  );
};

export default TransactionReport;
