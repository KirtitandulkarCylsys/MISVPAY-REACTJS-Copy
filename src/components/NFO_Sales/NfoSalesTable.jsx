import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import SideBar from "../Shared/SideBar/SideBar";
import DataTable from "react-data-table-component";

const NfoSalesTable = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const data= [
    {
      "name": "Declan O. Kim",
      "phone": "752-0415",
      "email": "elit.Curabitur@ut.net",
      "dob": "24/10/1986"
    },
    {
      "name": "Philip Owen",
      "phone": "246-6791",
      "email": "nec.ligula.consectetuer@risusDonecnibh.co.uk",
      "dob": "25/12/1986"
    },
   
    {
      "name": "Coby Sanford",
      "phone": "793-9294",
      "email": "risus@in.com",
      "dob": "03/01/1991"
    },
    {
      "name": "Hayfa W. Melton",
      "phone": "562-7157",
      "email": "molestie@quamPellentesque.org",
      "dob": "21/03/1988"
    },
      
    {
      "name": "Wynne Wolf",
      "phone": "664-1755",
      "email": "enim.Etiam.gravida@aliquetodioEtiam.com",
      "dob": "14/06/1985"
    },
    {
      "name": "Piper Mccormick",
      "phone": "1-816-664-9420",
      "email": "Duis@turpis.co.uk",
      "dob": "22/05/1987"
    },
    {
      "name": "Tanek Browning",
      "phone": "885-2917",
      "email": "eget@magnis.org",
      "dob": "29/10/1983"
    },
    {
      "name": "Linus T. Harding",
      "phone": "151-2485",
      "email": "faucibus@dignissimlacus.com",
      "dob": "03/06/1971"
    },
    {
      "name": "Harrison Alston",
      "phone": "814-6328",
      "email": "Integer.vulputate.risus@cursusluctusipsum.com",
      "dob": "20/02/1971"
    },
    {
      "name": "Rhea B. Lambert",
      "phone": "1-185-364-7519",
      "email": "a@sedduiFusce.org",
      "dob": "16/09/1993"
    },
    {
      "name": "Dennis M. Munoz",
      "phone": "198-7742",
      "email": "dapibus@Lorem.org",
      "dob": "10/08/1995"
    },
    {
      "name": "Caldwell Shelton",
      "phone": "410-3089",
      "email": "eget.ipsum@ultriciesadipiscingenim.com",
      "dob": "18/09/1975"
    }
  ]
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'DOB',
      selector: 'dob',
    },
  ];
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
              <div className="row">
                <div className="col-md-12">
                  <DataTable
                  columns={columns}
                  data={data}
                  pagination
                  />
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
