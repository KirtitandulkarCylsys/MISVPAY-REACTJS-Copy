import React, { useState } from "react";
import "./Table-CSS/SalesTable.css";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import RegionTable from "./SubTable/RegionTable";

const ZoneTable = ({
  transaction_summary_report,
  formatNumberToIndianFormat,
  startDate,
  endDate,
  select_type,
}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  let totalEquity = 0;
  let totalHybrid = 0;
  let totalArbitrage = 0;
  let totalPassive = 0;
  let totalFixedIncome = 0;
  let totalCash = 0;
  let grandTotal = 0;

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


  return (
      <>
      <div className="">
        <div>
          <div>
            <div className="row mt-4 mr-4 ">
              
              <div className="col-md-2 list-group">
                <p className="theader">
                  <Link
                    className="btn textlink"
                    to={`/RegionWiseSales/${select_type}/${startDate}/${endDate}`}
                  >
                    <b>All India Region Wise</b>
                  </Link>
                </p>
              </div>
              <div className="col-md-2">
                <p className="theader">
                  <Link className="btn textlink" to={`/UfcWise/${select_type}`}>
                    <b>All India UFC Wise </b>
                  </Link>
                </p>
              </div>
              <div className="col-md-2">
                <p className="theader">
                  <Link className=" btn textlink" to={`/RmWise/${select_type}`}>
                    <b>All India RM Wise </b>
                  </Link>
                </p>
              </div>
              <div className="row mt-4 mr-4 "></div>
              <div className="col-md-3" /> 
              <div className="col-md-12 p-3 schrollbar ">
                <table className="table small border" id="table1">
                  <thead>
                    <tr className="bgcolorBlue text-white border-1 ">
                      <th rowSpan="2" className="border-1 ">
                        Zone
                      </th>
                      <th colspan="7" className="border-1 ">
                        Sales
                      </th>
                      <th colspan="7" className="border-1 ">
                        Redemption
                      </th>
                      <th colspan="7">NetSales</th>
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
                    {transaction_summary_report.map((summary, index) => {
                      totalEquity += parseFloat(summary.SEQUITY);
                      totalHybrid += parseFloat(summary.SHYBRID);
                      totalArbitrage += parseFloat(summary.SARBITRAGE);
                      totalPassive += parseFloat(summary.SPASSIVE);
                      totalFixedIncome += parseFloat(summary.SFIXED_INCOME);
                      totalCash += parseFloat(summary.SCASH);
                      grandTotal += parseFloat(summary.STOTAL);

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
                                <RegionTable
                                  transaction_summary_report={
                                    transaction_summary_report
                                  }
                                  formatNumberToIndianFormat={
                                    formatNumberToIndianFormat
                                  }
                                  startDate={startDate}
                                  endDate={endDate}
                                  select_type={select_type}
                                  zone={summary.ZONE}
                                />
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ZoneTable;
