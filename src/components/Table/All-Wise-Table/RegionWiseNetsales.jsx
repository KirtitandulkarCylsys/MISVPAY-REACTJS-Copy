import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Loader from "../Loader";

const RegionWiseNetsales = ({
  formatNumberToIndianFormat,
  regionwise,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

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
    <div>
      <div className="head">
        <h4>
          <b>NETSALES</b>
        </h4>
        <h5>
          <b className="gray-color">(In Lakhs)</b>
        </h5>
      </div>
      <div className="col-md-3" />
      <div className="col-md-12">
        {loading ? (
          <Loader />
        ) : regionwise.length === 0 ? (
          <p>No data available.</p>
        ) : (
          <>
            <table
              id="region3"
              className="mt-3 table active "
              style={{
                backgroundColor: "white",
                border: "2px solid",
                borderColor: "#EE8B3A",
                borderBottomColor: "white",
              }}
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
                    {" "}
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
                {currentPageData.map((summary, index) => {
                  totalEquity += parseFloat(summary.NEQUITY);
                  totalHybrid += parseFloat(summary.NHYBRID);
                  totalArbitrage += parseFloat(summary.NARBITRAGE);
                  totalPassive += parseFloat(summary.NPASSIVE);
                  totalFixedIncome += parseFloat(summary.NFIXED_INCOME);
                  totalCash += parseFloat(summary.NCASH);
                  grandTotal += parseFloat(summary.NTOTAL);

                  return (
                    <tr>
                      <td>{summary.REGION} </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NEQUITY).toFixed(2)
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NHYBRID).toFixed(2)
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NARBITRAGE).toFixed(2)
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NPASSIVE).toFixed(2)
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NFIXED_INCOME).toFixed(2)
                        )}
                      </td>
                      <td className="text-end">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NCASH).toFixed(2)
                        )}
                      </td>
                      <td className="text-end" id="total">
                        {formatNumberToIndianFormat(
                          parseFloat(summary.NTOTAL).toFixed(2)
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
      </div>
    </div>
  );
};

export default RegionWiseNetsales;
