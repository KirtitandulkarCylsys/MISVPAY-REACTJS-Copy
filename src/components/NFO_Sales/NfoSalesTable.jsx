import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar/SideBar";

const NfoSalesTable = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="home-main">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={`${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
        >
          <div className="container-fluid">
            <div className="card bg-white mt-2">
              <div className="row">
                <div className="col-md-12 mt-3">
									<h4><b>NFO SALES DETAILS</b> </h4>
								</div>
              </div>
							<div className="row">
								<div className="col-md-12">
									<div className="col-md-6 ">
										<input type="file" className="form-control" id="" />
									</div>
									<div className="col-md-6 ">
										<label htmlFor="Upload">Upload</label>
										<input type="file" className="form-control"/>
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

export default NfoSalesTable;
