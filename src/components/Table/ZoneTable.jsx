import React, { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import RegionTable from "./RegionTable";
import "./ZoneTable.css";
import Api from "../Retail/RetailApi/Api";
import ReactPaginate from "react-paginate";
import { useDataContext } from "../../Context/DataContext";
const ZoneTable = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  // const [totalPages, setTotalPages] = useState("");
  // const[ currentPage, setCurrentPage] =useState(1);
  const {
    zonetablecurrentPage,
    zontablepageSize,
    setZonetablepageSize,
    setZonetablecurrentPage,
    fetchTransactionSummary,
    summary_report,formatNumberToIndianFormat,start_Date,end_Date,rolwiseselectype
  } = useDataContext();
  const handleButtonClick = (index) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    if (index === clickedIndex) {
      setClickedIndex(-1);
    } else {
      setClickedIndex(index);
    }
  };

  // const itemsperPage =
  //   zontablepageSize === ""
  //     ? summary_report.length
  //     : parseInt(zontablepageSize);
  // useEffect(() => {
  //   setZonetablecurrentPage("");
  //   setTotalPages(Math.ceil(summary_report.length / itemsperPage));
  // }, [zontablepageSize]);
  // useEffect(()=>{
  //   currentPage=== 0 ? setZonetablecurrentPage(""):
  //   setZonetablecurrentPage(currentPage.toString());
  //   console.log(currentPage,'currentPage')
  // },[currentPage])

  const calculateTotal = (columnName) => {
    let total = 0;
    if (summary_report && Array.isArray(summary_report)) {
      summary_report.forEach((item) => {
        total += parseFloat(item[columnName]);
      });
    }
    return total;
  };

  // const handlePageClick = (selectedPage) => {
  //   setCurrentPage(selectedPage.selected)
  //   setZonetablecurrentPage(currentPage.toString());
  //   console.log(selectedPage.selected,'selectedPage.selected');
  // };

  // const handlePageSizeChange = (e) => {
  //   console.log(e.target.value, "pagesize");
  //   setZonetablecurrentPage(zonetablecurrentPage.toString())
  //   setZonetablepageSize(e.target.value);
  //   fetchTransactionSummary(e.target.value);
  // };
 
  const handlePageSizeChange = (e) => {
    const newSize = e.target.value;
    setZonetablepageSize(newSize);
    setZonetablecurrentPage("1"); 
    fetchTransactionSummary();
  };
  const handlePrevious = () => {
    // Decrease the page number by 1
    const newPage = parseInt(zonetablecurrentPage) - 1;
    if (newPage >= 1) {
      setZonetablecurrentPage(newPage.toString());
      fetchTransactionSummary();
    }
  };
  const handleNext = () => {
    const newPage = parseInt(zonetablecurrentPage) + 1;
    setZonetablecurrentPage(newPage.toString());
    fetchTransactionSummary();
  };
 
  // const startIndex = currentPage * itemsperPage;
  // const endIndex = startIndex + itemsperPage;
  // const subset = summary_report.slice(startIndex, endIndex);
  // console.log(startIndex,'startIndex', subset,'subset', summary_report,'summary_report');
  // console.log(endIndex,'endIndex');

   const totalPages = Math.ceil(summary_report.length / zontablepageSize);
  const isNextButtonDisabled = parseInt(zonetablecurrentPage) >= totalPages;
  return (
    <>
      <div className="">
        <div>
          <div>
            <div className="row mt-4 justify-content-around">
              <div className="col-md-2 d-flex">
                <label htmlFor="">
                  <b>Select Entries</b>
                </label>
                <select
                  className="form-select form-control w-50"
                  value={zontablepageSize} // Controlled component
                  onChange={handlePageSizeChange}
                >
                  <option value="5">5 </option>
                  <option value="10">10 </option>
                  <option value="20">20 </option>
                  <option value="30">30 </option>
                  <option value="40">40</option>
                </select>
              </div>
              <div className="col-md-2 list-group">
                <p className="theader">
                  <Link
                    className="btn textlink"
                    to={`/RegionWiseSales/${rolwiseselectype}/${start_Date}/${end_Date}`}
                  >
                    <b>All India Region Wise</b>
                  </Link>
                </p>
              </div>
              <div className="col-md-2">
                <p className="theader">
                  <Link className="btn textlink" to={`/UfcWise/${rolwiseselectype}`}>
                    <b>All India UFC Wise </b>
                  </Link>
                </p>
              </div>
              <div className="col-md-2">
                <p className="theader">
                  <Link className=" btn textlink" to={`/RmWise/${rolwiseselectype}`}>
                    <b>All India RM Wise </b>
                  </Link>
                </p>
              </div>
            </div>
            <div className="row mt-4 mr-4 justify-content-center ">
              <div className="col-md-3" />
              <div className="col-md-12 p-3 schrollbar ">
                <table className="table small border" id="table1">
                  <thead>
                    <tr className="bgcolorBlue text-white border-1 ">
                      <th
                        rowSpan="2"
                        className="border-1  text-center"
                        style={{ lineHeight: "4" }}
                      >
                        Zone
                      </th>
                      <th colspan="7" className="border-1 text-center ">
                        Sales
                      </th>
                      <th colspan="7" className="border-1 text-center">
                        Redemption
                      </th>
                      <th colspan="7" className="text-center">
                        NetSales
                      </th>
                    </tr>
                    <tr className="bgcolorBlue text-white border-1 ">
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
                  <tbody>
                    {summary_report?.map((summary, index) => {
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td>
                              <button
                                className="textlink"
                                onClick={() => handleButtonClick(index)}
                                disabled={isLoading}
                              >
                                <b className="sharp-font"> {summary.ZONE}</b>
                              </button>
                              {isLoading && (
                                <div className="text-center mt-4">
                                  <i className="fas fa-spinner fa-spin fa-2x loder"></i>{" "}
                                  <Loader className="loder" />
                                </div>
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.SEQUITY)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.SHYBRID)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.SARBITRAGE)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.SPASSIVE)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.SFIXED_INCOME)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.SCASH)
                              )}
                            </td>
                            <td className="text-end color-biege" id="total">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.STOTAL)
                              )}
                            </td>

                            {/* redemption data */}
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.REQUITY).toFixed(2)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.RHYBRID).toFixed(2)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.RARBITRAGE).toFixed(2)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.RPASSIVE).toFixed(2)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.RFIXED_INCOME).toFixed(2)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.RCASH).toFixed(2)
                              )}
                            </td>
                            <td className="text-end" id="total">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.RTOTAL).toFixed(2)
                              )}
                            </td>

                            {/* netsales data */}
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NEQUITY)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NHYBRID)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NARBITRAGE)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NPASSIVE)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NFIXED_INCOME)
                              )}
                            </td>
                            <td className="text-end">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NCASH)
                              )}
                            </td>
                            <td className="text-end" id="total">
                              {formatNumberToIndianFormat(
                                parseFloat(summary.NTOTAL)
                              )}
                            </td>
                          </tr>
                          {clickedIndex === index && (
                            <tr key={`subtable-${index}`}>
                              <td colSpan="22" className="p-0">
                                <RegionTable zone={summary.ZONE}/>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                    <tr className="bgcolorBlue text-white">
                      <td>TOTAL</td>
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
                {/* <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={totalPages}
                  forcePage={zonetablecurrentPage}
                  onPageChange={handlePageClick}
                  containerClassName={"rmpagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                /> */}
                <div>
                  <button onClick={handlePrevious}>Previous</button>
                  <button onClick={handleNext} disabled={isNextButtonDisabled}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoneTable;
