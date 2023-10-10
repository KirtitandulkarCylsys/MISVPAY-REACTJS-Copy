import React, { useMemo, useState } from "react";
import "./AumUfcReport.css";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import { useUfc } from "../RetailApi/AUM_Api";
import ExportToPDF from "./ExportToPDF";
import excel from "../../Assets/images/excel_icon.png";
import { ExportToExcel } from "./ExportToExcel";
import LoaderSearch from "../../Table/SubTable/LoaderSearch";
import { useParams } from "react-router-dom";
const AumUfcReport = () => {
  const { zone, report_period, region_code } = useParams();
  const queryParams = useMemo(
    () => ({
      zone: zone,
      report_period: report_period,
      region_code: region_code,
    }),
    [zone, report_period, region_code]
  );
  const queryParamsString = new URLSearchParams(queryParams).toString();
  const { aum_ufc, loading } = useUfc(queryParamsString);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleExport = () => {
    ExportToExcel(aum_ufc, "UFC report");
  };

  return (
    <>
      <div className="container-fluid p-0 home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >
            <div className="card mt-4 m-3" style={{ borderRadius: "10px" }}>
              <div className="headline pt-4">
                <h4>
                  <b>Retail UFCWise AUM Report</b>
                </h4>
              </div>
              <div className="col-md-12 d-flex mt-3 justify-content-end p-2">
                <div className="d-flex">
                  <p className="icon">
                    <button onClick={handleExport} className="border-0">
                      <img src={excel} alt="excelicon" />
                    </button>
                    |
                    <ExportToPDF />
                  </p>
                </div>
              </div>
              <div className="container-fluid ">
                {loading ? (
                  <div>
                    <LoaderSearch />
                  </div>
                ) : (
                  <div className=" mt-3" style={{ paddingLeft: "10px" }}>
                    <div
                      className=" d-flex"
                      style={{ paddingLeft: "10px", paddingBottom: "10px" }}
                    >
                      <div className="col-md-3 d-flex">
                        <h4>
                          <b>SALES</b>
                        </h4>
                        <h5>
                          <b className="gray-color">(In Lakhs)</b>
                        </h5>
                      </div>
                      {/* <div className="col-md-2 list-group">
                      <p className="theader">
                        <b>All India Region Wise</b>
                      </p>
                    </div>
                    <div className="col-md-2">
                      <p className="theader">
                        <b>All India UFC Wise </b>
                      </p>
                    </div>
                    <div className="col-md-2">
                      <p className="theader">
                        <b>All India RM Wise </b>
                      </p>
                    </div> */}
                    </div>
                  </div>
                )}
                {!loading && (
                  <table className="table table-bordered p-1 active" id="UFC">
                    <thead className="Bgcolor">
                      <tr className="mid ">
                        <th rowSpan="2">Zone</th>
                        <th rowSpan="2">Region</th>
                        <th rowSpan="2">Region Code</th>
                        <th rowSpan="2">UFC Code</th>
                        <th rowSpan="2">UFC</th>
                        <th rowSpan="2">Employee ID</th>
                        <th rowSpan="2">Employee Name</th>
                        <th rowSpan="2">Total AUM</th>
                        <th colSpan="6">AUM</th>
                      </tr>
                      <tr>
                        <th className="forright">Equity</th>
                        <th className="forright">Hybrid</th>
                        <th className="forright">Arbitrage</th>
                        <th className="forright">Passive(ex-Debt)</th>
                        <th className="forright">Fixed Income</th>
                        <th className="forright">Cash</th>
                      </tr>
                    </thead>
                    <tbody>
                      {aum_ufc.map((item) => (
                        <tr key={item.SrNo}>
                          <td className="forleft">{item.ZONE}</td>
                          <td className="forleft">{item.REGION_NAME}</td>
                          <td className="forleft">{item.REGION_CODE}</td>
                          <td className="forleft">{item.UFC_CODE}</td>
                          <td className="forleft">{item.UFC_NAME}</td>
                          <td className="forleft">{item.EMPLID}</td>
                          <td className="forleft">{item.EMP_NAME}</td>
                          <td className="forright">{item.TOTAL_AUM}</td>
                          <td className="forright">{item.EQUITY_AUM}</td>
                          <td className="forright">{item.HYBRID_AUM}</td>
                          <td className="forright">{item.ARBITRAGE_AUM}</td>
                          <td className="forright">{item.PASSIVE_AUM}</td>
                          <td className="forright">{item.FIXED_INCOME_AUM}</td>
                          <td className="forright">{item.CASH_AUM}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AumUfcReport;
