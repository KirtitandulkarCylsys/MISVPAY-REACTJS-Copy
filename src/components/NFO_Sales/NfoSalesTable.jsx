import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar/SideBar";
import { NfoApi } from './NfoApi';
import "./NfoSales.css"
const NfoSalesTable = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { nfo_details, loading } = NfoApi();
  return (
    <div className="home-main">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div className={`${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}>
          <div className="container-fluid">
            <div className="card bg-white mt-2">
              <div className="row">
                <div className="col-md-12 mt-3">
                  <h4><b>NFO SALES DETAILS</b></h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex">
                  <div className="col-md-4">
                    <input type="file" className="form-control" id="" />
                  </div>
                  <div className="col-md-4">
                    <button className="btn BgcolorOrange">Upload</button>
                  </div>
                </div>
              </div>
              <div className="row  p-3 mt-4 mr-4 justify-content-center">
                <div className="col-md-12  schrollbarNfo">
                  <table className='table '>
                    <thead className="bgcolorBlue text-white">
                      <tr>
                        <th>TRNTYPE</th>
                        <th>INHOUSE NUMBER</th>
                        <th>TYPE</th>
                        <th>PLAN</th>
                        <th>PLAN DESCRIPTION</th>
                        <th>FROM SCHEME</th>
                        <th>FROM PLAN</th>
                        <th>FROM PLANDESC</th>
                        <th>AMC CODE</th>
                        <th>SCHDESC</th>
                        <th>FOLIO NUMBER</th>
                        <th>INVESTOR NAME</th>
                        <th>AMOUNT</th>
                        <th>AMTINCR</th>
                        <th>ARN NO</th>
                        <th>ARN NAME</th>
                        <th>UFC CODE</th>
                        <th>UFC NAME</th>
                        <th>REGION</th>
                        <th>ZONE</th>
                        <th>CHANNEL NAME</th>
                        <th>MOD CHANNEL</th>
                        <th>SCHEME CODE</th>
                        <th>BRANCH CODE</th>
                        <th>PIN</th>
                        <th>T30B30FLAG</th>
                        <th>PLATFORM</th>
                        <th>TRXN DATE</th>
                        <th>SCHEME DESCRIPTION</th>
                        <th>MAPRM CODE</th>
                        <th>RIA CODE</th>
                        <th>ARN_RIA</th>
                        <th>PLATFORM2</th>
                        <th>MOBILE NUMBER</th>
                        <th>EMAIL ID</th>
                        <th>TYPE 2</th>
                        <th>REGION CODE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>

                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NfoSalesTable;
