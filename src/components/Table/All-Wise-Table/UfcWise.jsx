import React, { useMemo, useState } from "react";
import Navbar from "../../Shared/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";
import ExportToPDF from "../../Retail/AUM/ExportToPDF";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ExportExcelUfc } from "./ExportExcel";
import { AllUfcwise } from "../../Retail/RetailApi/RegionApi";
import "./UfcPagination.css";
const UfcWise = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const { select_type } = useParams();
  const queryParams = useMemo(() => {
    return new URLSearchParams({
      employee_id: "1234",
      emprole: "ADMIN",
      quarter: "202324Q2",
      start_date: "01/04/2023",
      end_date: "30/09/2023",
      select_type: select_type,
      scheme_code: "nill",
      channel: "RTL",
      zone: "",
      region: "",
      ufc: "",
      rm: "nill",
      common_report: "ALL_UFCWISE",
    });
  }, [select_type]);
  const { ufcwise } = AllUfcwise(queryParams);
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

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = ufcwise.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(ufcwise.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const calculateTotal = (columnName) => {
    let total = 0;
    if (ufcwise && Array.isArray(ufcwise)) {
      ufcwise.forEach((item) => {
        total += parseFloat(item[columnName]);
      });
    }
    return total;
  };

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
                    <b className="black-color">All India UFC Wise</b>
                  </h4>
                  <h5>
                    <b className="gray-color">(In Lakhs)</b>
                  </h5>
                </div>
                <div
                  className="col-md-12 d-flex justify-content-between"
                  style={{ marginTop: "30px" }}
                >
                  <Link
                    to="/Transaction"
                    className="btn"
                    style={{
                      backgroundColor: "#4C6072",
                      color: "white",
                      height: "fit-content",
                    }}
                  >
                    back
                  </Link>
                  <p className="icon">
                    <ExportExcelUfc />
                    |
                    <ExportToPDF />
                  </p>
                </div>
              </div>
              <div className="scrollbarRegion">
                <table className="mt-3 table " id="ufc1">
                  <thead style={{ backgroundColor: "#4C6072", color: "white" }}>
                    <tr className="">
                      <th
                        rowSpan="2"
                        className="border-end border-1"
                        style={{ lineHeight: "4" }}
                      >
                        UFC code
                      </th>
                      <th
                        rowSpan="2"
                        className="border-end border-1"
                        style={{ lineHeight: "4" }}
                      >
                        UFC
                      </th>
                      <th colspan="7" className="border-1 text-center ">
                        Sales
                      </th>
                      <th colspan="7" className="border-1 text-center ">
                        Redemption
                      </th>
                      <th colspan="7" className="border-1 text-center ">
                        NetSales
                      </th>
                    </tr>
                    <tr>
                      <th className="forright ">Equity</th>
                      <th className="forright">Hybrid</th>
                      <th className="forright">Arbitrage</th>
                      <th className="forright">Passive</th>
                      <th className="forright">Fixed Income</th>
                      <th className="forright">Cash</th>
                      <th className="forright border-end">Total</th>
                      <th className="forright">Equity</th>
                      <th className="forright">Hybrid</th>
                      <th className="forright">Arbitrage</th>
                      <th className="forright">Passive</th>
                      <th className="forright">Fixed Income</th>
                      <th className="forright">Cash</th>
                      <th className="forright border-end">Total</th>
                      <th className="forright">Equity</th>
                      <th className="forright">Hybrid</th>
                      <th className="forright">Arbitrage</th>
                      <th className="forright">Passive</th>
                      <th className="forright">Fixed Income</th>
                      <th className="forright">Cash</th>
                      <th className="forright border-end">Total</th>
                    </tr>
                  </thead>
                  <tbody style={{ backgroundColor: "#DADADA" }}>
                    {currentPageData.map((ufc, index) => {
                      return (
                        <tr key={index}>
                          <td>{ufc.UFC_CODE}</td>
                          <td>{ufc.UFC_NAME}</td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.SEQUITY)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.SHYBRID)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.SARBITRAGE)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.SPASSIVE)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.SFIXED_INCOME)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(parseFloat(ufc.SCASH))}
                          </td>
                          <td
                            className="text-end"
                            style={{ backgroundColor: "#8080805c" }}
                          >
                            <b>
                              {formatNumberToIndianFormat(
                                parseFloat(ufc.STOTAL)
                              )}
                            </b>
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.REQUITY)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.RHYBRID)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.RARBITRAGE)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.RPASSIVE)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.RFIXED_INCOME)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(parseFloat(ufc.RCASH))}
                          </td>
                          <td
                            className="text-end"
                            style={{ backgroundColor: "#8080805c" }}
                          >
                            <b>
                              {formatNumberToIndianFormat(
                                parseFloat(ufc.RTOTAL)
                              )}
                            </b>
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.NEQUITY)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.NHYBRID)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.NARBITRAGE)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.NPASSIVE)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(
                              parseFloat(ufc.NFIXED_INCOME)
                            )}
                          </td>
                          <td className="text-end">
                            {formatNumberToIndianFormat(parseFloat(ufc.NCASH))}
                          </td>
                          <td
                            className="text-end"
                            style={{ backgroundColor: "#8080805c" }}
                          >
                            <b>
                              {formatNumberToIndianFormat(
                                parseFloat(ufc.NTOTAL)
                              )}
                            </b>
                          </td>
                        </tr>
                      );
                    })}
                    <tr style={{ backgroundColor: "#4C6072", color: "white" }}>
                      <td>TOTAL</td>
                      <td></td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("SEQUITY").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("SHYBRID").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("SARBITRAGE").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("SPASSIVE").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("SFIXED_INCOME").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("SCASH").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("STOTAL").toFixed(2))
                        )}
                      </td>
                      {/* REDEMPTION TOTAL */}
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("REQUITY").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("RHYBRID").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("RARBITRAGE").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("RPASSIVE").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("RFIXED_INCOME").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("RCASH").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("RTOTAL").toFixed(2))
                        )}
                      </td>
                      {/* NETSALES TOTAL */}
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NEQUITY").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NHYBRID").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NARBITRAGE").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NPASSIVE").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NFIXED_INCOME").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NCASH").toFixed(2))
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(calculateTotal("NTOTAL").toFixed(2))
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="ufcpagination-container">
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"ufcpagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UfcWise;
