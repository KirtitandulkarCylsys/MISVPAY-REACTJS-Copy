import React, { useState } from "react";
import "./Retail.css";
import msg from "../Assets/images/msg_icon.png";
import calender from "../Assets/images/date-time_icon.png";
import SideBar from "../Shared/SideBar/SideBar";
import Navbar from "../Shared/Navbar";
import datetime from "../Assets/images/Vector (Stroke).png";
import ScheduleModal from "../Shared/Modal/ScheduleModal";
import LoaderSearch from "../Table/LoaderSearch";
import Api from "./RetailApi/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Scheme } from "../Retail/RetailApi/AUM_Api";
import { ExcelToExport } from "./ExcelToExport";
import ExportToPdf from "./ExportToPdf";
// import Filter from "./Filter";
// import DropDown from "./DropDown";
import Multiselect from "multiselect-react-dropdown";
import ZoneTable from "../Table/ZoneTable";
import UfcTable from "../Table/UfcTable";
import RmTable from "../Table/RmTable";
import RegionTable from "../Table/RegionTable";
import { useDataContext } from "../../Context/DataContext";

const Retail_Transaction = ({ headers }) => {
  // const { scheme_details } = Scheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const {
    setStart_Date,
    setEnd_Date,
    setRolwiseselectype,
    hide,
    fetchTransactionSummary,
    setHide,
    emproles,
    start_Date,
    end_Date,
    rolwiseselectype,
    loading,
  } = useDataContext();
  const commonReport = emproles;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const togglehide = async () => {
    try {
      await fetchTransactionSummary("");
      setHide(true);
    } catch (error) {
      setHide(false);
      toast.error("Please fill all the fields");
    }
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    if (newStartDate > end_Date) {
      toast.error("Start date should be less than end date");
    } else {
      setStart_Date(newStartDate);
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    if (newEndDate < start_Date) {
      toast.error("End date should be greater than start date");
    } else {
      setEnd_Date(newEndDate);
    }
  };
  const handleSelectType = (value) => {
    setRolwiseselectype(value);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={`${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
          >
            <div className="container-fluid">
              <section className="section mt-3">
                <div className="row">
                  <div className="col-lg-12 col-lg-offset-2">
                    <div className="card-body bg-white ">
                      <div className="rounded-lg p-3">
                        <button
                          class="border-0 w-100 text-left bg-transparent "
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <h5 className="text-lg-start">
                            <b> RETAIL TRANSACTION SUMMARY REPORT ZONE WISE</b>
                          </h5>
                        </button>
                      </div>
                      <div className="row d-flex justify-content-around">
                        {/* start datw */}
                        <div className="form-group col-md-2">
                          <label for="">
                            <b> Start Date </b>
                          </label>
                          <img src={datetime} alt="datetime" />
                          <input
                            type="date"
                            class="form-control"
                            id=""
                            placeholder="Project Start Date"
                            value={start_Date}
                            onChange={handleStartDateChange}
                          />
                        </div>
                        {/* end Date */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b> End Date </b>
                          </label>
                          <img src={datetime} alt="datetime" />
                          <input
                            type="date"
                            class="form-control"
                            id=""
                            placeholder="Project End Date"
                            value={end_Date}
                            onChange={handleEndDateChange}
                          />
                        </div>
                        {/* asset class */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b>Asset Class</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            class="form-select form-control"
                          >
                            <option value="">All </option>
                            <option value="">Arbitrage </option>
                            <option value="">Cash </option>
                            <option value="">Equity </option>
                            <option value="">Fixed Income</option>
                          </select>
                        </div>
                        {/* select type */}
                        <div class="form-group col-md-2">
                          <label for="">
                            <b> Select Type</b>
                          </label>
                          <select
                            name=""
                            id="ab"
                            class="form-select form-control"
                            value={rolwiseselectype}
                            onChange={(e) => handleSelectType(e.target.value)}
                          >
                            <option value=""> choose type</option>
                            <option value="NETSALES">NET SALES </option>
                            <option value="GROSSSALES">GROSS SALES </option>
                          </select>
                        </div>
                        {/* scheme details */}
                      </div>

                      <div className="row d-flex justify-content-around">
                        {/* <div class="col-md-1"></div> */}
                        <div className="col-md-4">
                          <div className="form-group col-md-3  mt-4">
                            <label className="form-lables">
                              {/* <b> Scheme</b> */}
                            </label>
                            {/* <Multiselect
                            options={options}
                            selectedValues={selectedSchemes}
                            onSelect={functionToHandleSelect}
                            onRemove={functionToHandleRemove}
                            displayValue="name"
                            /> */}
                          </div>
                        </div>
                        {/* coloumn and filter
                        <div className=" col-md-2 media">
                          <Filter />
                        </div>
                        <div className="col-md-2">
                          <DropDown />
                        </div> */}
                        {/* search button */}
                        <div className="col-md-4"></div>
                        <div className="col-md-4 d-flex">
                          <div className="col-md-6 mt-5 search ">
                            <button
                              className="btn  BgcolorOrange float-end mx-2 "
                              onClick={togglehide}
                            >
                              <b className="colorwhite"> Search</b>
                            </button>
                          </div>

                          {/* export, pdf, model */}
                          <div className="col-md-6 mt-5 tabs ">
                            <p className="exporttab">
                              <ExcelToExport />
                              |<ExportToPdf />|
                              <img src={msg} alt="msgicon" /> |{" "}
                              <img
                                id="myImg"
                                src={calender}
                                alt="calendericon"
                                data-bs-toggle="modal"
                                data-bs-target="#scheduleModal"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <ScheduleModal />
                      <>
                        <div className="Table">
                          {loading ? (
                            <div className="text-center mt-4">
                              <i className="fas fa-spinner fa-spin fa-2x"></i>{" "}
                              <LoaderSearch />
                            </div>
                          ) : hide ? (
                            <>
                              {commonReport === "ZH" ||
                              commonReport === "ADMIN" ? (
                                <ZoneTable />
                              ) : commonReport === "RH" ? (
                                <RegionTable />
                              ) : commonReport === "CM" ? (
                                <UfcTable />
                              ) : commonReport === "RM" ? (
                                <RmTable />
                              ) : null}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Retail_Transaction;
