import React, { useState, useMemo } from "react";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import RegionWiseRedemption from "./RegionWiseRedemption";
import Loader from "../Loader";
import RegionWiseNetsales from "./RegionWiseNetsales";
import { ExportExcelRegion } from "./ExportExcel";
import { ExportPdfRegion } from "./ExportPdfRegion";
import { AllRegionwise } from "../../Retail/RetailApi/RegionApi";
import "./RegionPagination.css";
import Api from "../../Retail/RetailApi/Api";
const RegionWiseSales = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const { select_type,startDate,endDate } = useParams();
  
  const { emproles, channel, formatNumberToIndianFormat } = Api();
  const formattedStartDate = startDate.split("-").reverse().join("/");
  const formattedEndDate = endDate.split("-").reverse().join("/");
  const queryParams = useMemo(() => {
    return new URLSearchParams({
      employee_id: "1234",
      emprole: emproles,
      quarter: "202324Q2",
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      select_type: select_type,
      scheme_code: "nill",
      channel:channel,
      zone: "",
      region: "",
      ufc: "",
      rm: "nill",
      common_report: "ALL_REGIONWISE",
    });
  }, [select_type, emproles, formattedStartDate, formattedEndDate, channel]);

  const { regionwise, loading } = AllRegionwise(queryParams);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let totalEquity = 0;
  let totalHybrid = 0;
  let totalArbitrage = 0;
  let totalPassive = 0;
  let totalFixedIncome = 0;
  let totalCash = 0;
  let grandTotal = 0;

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = regionwise.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(regionwise.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  
  return (
    <div className="new-component container-fluid">
      <Navbar onToggle={toggleSidebar} />
      <div className="d-flex">
        <SideBar isOpen={sidebarOpen} />
        <div
          className={` ${sidebarOpen ? "dashboard-closed" : "dashboard-full"}`}
        >
          <div className="bg-white card m-4" style={{ borderRadius: "10px" }}>
            <div className="col-md-12">
              <div className="row mt-2 bg-white">
                <div className="head">
                  <h4>
                    <b className="black-color">All India Region Wise</b>
                  </h4>
                  <h5>
                    <b className="gray-color">(In Lakhs)</b>
                  </h5>
                </div>
                <div
                  className="col-md-12 d-flex justify-content-lg-between "
                  style={{ marginTop: "30px" }}
                >
                  <Link
                    to="/Transaction"
                    className=" btn colorwhite BgcolorOrange"
                    style={{ height: "fit-content" }}
                  >
                    back
                  </Link>

                  <p className="icon">
                    <ExportExcelRegion />
                    |
                    <ExportPdfRegion />
                  </p>
                </div>
                <div className="col-md-3 d-flex">
                  <h4>
                    <b>SALES</b>
                  </h4>
                  <h5>
                    <b className="gray-color">(In Lakhs)</b>
                  </h5>
                </div>
              </div>
              {loading ? (
                <Loader />
              ) : regionwise.length === 0 ? (
                <p>No data available.</p>
              ) : (
                <>
                  <table
                    className="mt-3 table active "
                    style={{
                      backgroundColor: "white",
                      border: "2px solid",
                      borderColor: "#EE8B3A",
                      borderBottomColor: "white",
                    }}
                    id="region1"
                  >
                    <thead>
                      <tr className="colorwhite BgcolorOrange">
                        <th scope="col">REGION</th>
                        <th scope="col" className="text-end">
                          Equity
                        </th>
                        <th scope="col" className="text-end">
                          Hybrid
                        </th>
                        <th scope="col" className="text-end">
                          Arbitrage
                        </th>
                        <th scope="col" className="text-end">
                          Passive(ex-Debt)
                        </th>
                        <th scope="col" className="text-end">
                          Fixed Income
                        </th>
                        <th scope="col" className="text-end">
                          Cash
                        </th>
                        <th scope="col" className="text-end">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ backgroundColor: "#DADADA" }}>
                      {currentPageData.map((region, index) => {
                        totalEquity += parseFloat(region.SEQUITY);
                        totalHybrid += parseFloat(region.SHYBRID);
                        totalArbitrage += parseFloat(region.SARBITRAGE);
                        totalPassive += parseFloat(region.SPASSIVE);
                        totalFixedIncome += parseFloat(region.SFIXED_INCOME);
                        totalCash += parseFloat(region.SCASH);
                        grandTotal += parseFloat(region.STOTAL);
                        return (
                          <tr key={index}>
                            <td>{region.REGION}</td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(region.SEQUITY)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(region.SHYBRID)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(region.SARBITRAGE)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(region.SPASSIVE)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(region.SFIXED_INCOME)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(region.SCASH)
                              )}
                            </td>
                            <td className="text-end color-biege" id="total">
                              {formatNumberToIndianFormat(
                                parseFloat(region.STOTAL)
                              )}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="colorwhite BgcolorOrange">
                        <td>TOTAL</td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(totalEquity.toFixed(2))
                          )}
                        </td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(totalHybrid.toFixed(2))
                          )}
                        </td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(totalArbitrage.toFixed(2))
                          )}
                        </td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(totalPassive.toFixed(2))
                          )}
                        </td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(totalFixedIncome.toFixed(2))
                          )}
                        </td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(totalCash.toFixed(2))
                          )}
                        </td>
                        <td className="text-end">
                          {formatNumberToIndianFormat(
                            parseFloat(grandTotal.toFixed(2))
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="pagination-container">
                    <ReactPaginate
                      previousLabel={"← Previous"}
                      nextLabel={"Next →"}
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      previousLinkClassName={"pagination__link"}
                      nextLinkClassName={"pagination__link"}
                      disabledClassName={"pagination__link--disabled"}
                      activeClassName={"pagination__link--active"}
                    />
                  </div>
                </>
              )}
              <RegionWiseRedemption
                formatNumberToIndianFormat={formatNumberToIndianFormat}
                loading={loading}
                regionwise={regionwise}
              />
              <RegionWiseNetsales
                formatNumberToIndianFormat={formatNumberToIndianFormat}
                loading={loading}
                regionwise={regionwise}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionWiseSales;
