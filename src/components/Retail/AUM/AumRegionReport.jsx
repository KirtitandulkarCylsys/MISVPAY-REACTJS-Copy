import React, { useMemo, useState } from "react";
import "./AumRegionReport.css";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../Shared/SideBar/SideBar";
import Navbar from "../../Shared/Navbar";
import { useAUMApi } from "../RetailApi/AUM_Api";
import excel from "../../Assets/images/excel_icon.png";
import { ExportToExcel } from "./ExportToExcel";
import ExportToPDF from "./ExportToPDF";
import LoaderSearch from "../../Table/SubTable/LoaderSearch";
import { useParams } from "react-router-dom";

const AumRegionReport = () => {
  const { zone, report_period } = useParams();
  const navigate = useNavigate();
  const queryParams = useMemo(
    () => ({
      zone: zone,
      report_period: report_period,
    }),
    [zone, report_period]
  );
  const queryParamsString = new URLSearchParams(queryParams).toString();
  const { aum_details, loading } = useAUMApi(queryParamsString);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const formatNumberToIndianFormat = (number) => {
    if (typeof number !== "number") {
      return number;
    }

    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleExport = () => {
    ExportToExcel(aum_details, "AUM Region Report");
  };

  const handleRegionClick =(region_code)=>{
    navigate(`/AumUfcReport/${zone}/${report_period}/${region_code}`)
  }

  return (
    <div>
      <div className="container-fluid p-0 home-main">
        <Navbar onToggle={toggleSidebar} />
        <div className="d-flex">
          <SideBar isOpen={sidebarOpen} />
          <div
            className={` ${
              sidebarOpen ? "dashboard-closed" : "dashboard-full"
            }`}
          >
            <div className="card p-2 m-4">
              <h5 className="headline p-2">
                <b>RETAIL ZH/RH/RM REGION REPORT </b>
              </h5>
              <div className="col-md-12 col-md-12 d-flex justify-content-end">
                <p className="icon">
                  <button onClick={handleExport} className="border-0">
                    <img src={excel} alt="excelicon" />
                  </button>
                  |
                  <ExportToPDF />
                </p>
              </div>
              <br />
              {loading ? (
                <div>
                  <LoaderSearch />
                </div>
              ) : (
                <div style={{ paddingLeft: "10px" }}>
                  <div className=" d-flex" style={{ paddingLeft: "10px" }}>
                    <div className="col-md-3 d-flex">
                      <h4>
                        <b>SALES</b>
                      </h4>
                      <h5>
                        <b className="gray-color">(In Lakhs)</b>
                      </h5>
                    </div>
                    <div className="col-md-2 list-group">
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
                  </div>
                  </div>
                </div>
              )}
              {!loading && (
                <table className="table table-bordered active" id="REGION">
                  <thead className="bgcolorBlue text-white mainhead">
                    <tr className="mid ">
                      <th rowSpan="2" className="headtable">
                        Zone
                      </th>
                      <th rowSpan="2" className="headtable">
                          Region code
                      </th>
                      <th rowSpan="2" className="headtable">
                          Region Name
                      </th>
                      <th rowSpan="2" className="headtable">
                        Total AUM
                      </th>
                      <th colSpan="6">AUM</th>
                    </tr>
                    <tr>
                      <th className="forright">Equity</th>
                      <th className="forright">Hybrid</th>
                      <th className="forright">Arbitrage</th>
                      <th className="forright">Passive</th>
                      <th className="forright">Fixed Income</th>
                      <th className="forright">Cash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aum_details.map((item) => (
                      <>
                        <tr key={item.SrNo}>
                          <td>{item.ZONE}</td>
                          <td>
                          <button
                              className="btn "
                              onClick={() => handleRegionClick(item.REGION_CODE)}
                            >
                              {item.REGION_CODE}
                            </button>
                          </td>
                          <td>{item.REGION_NAME}</td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.TOTAL_AUM)
                            )}
                          </td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.EQUITY_AUM)
                            )}
                          </td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.HYBRID_AUM)
                            )}
                          </td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.ARBITRAGE_AUM)
                            )}
                          </td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.PASSIVE_AUM)
                            )}
                          </td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.FIXED_INCOME_AUM)
                            )}
                          </td>
                          <td className="forright">
                            {formatNumberToIndianFormat(
                              parseFloat(item.CASH_AUM)
                            )}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AumRegionReport;
