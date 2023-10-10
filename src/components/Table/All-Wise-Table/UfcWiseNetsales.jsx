import React, { useState } from "react";
import Loader from "../Loader";
import ReactPaginate from "react-paginate";

const UfcWiseNetsales = ({ formatNumberToIndianFormat, ufc, loading }) => {
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
  const currentPageData = ufc.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(ufc.length / PER_PAGE);

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
        ) : ufc.length === 0 ? (
          <p>No data available.</p>
        ) : (
          <>
          <table className="mt-3 table " id="ufc3" style={{ fontSize: 14 }}>
            <thead style={{ backgroundColor: "#4C6072", color: "white" }}>
              <tr>
                <th scope="col">UFC Code</th>
                <th scope="col">UFC NAME</th>
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
              {currentPageData.map((ufc, index) => {
                totalEquity += parseFloat(ufc.NEQUITY);
                totalHybrid += parseFloat(ufc.NHYBRID);
                totalArbitrage += parseFloat(ufc.NARBITRAGE);
                totalPassive += parseFloat(ufc.NPASSIVE);
                totalFixedIncome += parseFloat(ufc.NFIXED_INCOME);
                totalCash += parseFloat(ufc.NCASH);
                grandTotal += parseFloat(ufc.NTOTAL);
                return (
                  <tr key={index}>
                    <td>{ufc.UFC_CODE}</td>
                    <td>{ufc.UFC_NAME}</td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NEQUITY).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NHYBRID).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NARBITRAGE).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NPASSIVE).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NFIXED_INCOME).toFixed(2)
                      )}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NCASH).toFixed(2)
                      )}
                    </td>
                    <td className="text-end" id="total">
                      {formatNumberToIndianFormat(
                        parseFloat(ufc.NTOTAL).toFixed(2)
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr style={{ backgroundColor: "#4C6072", color: "white" }}>
                <td>TOTAL</td>
                <td></td>
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
                  {formatNumberToIndianFormat(parseFloat(totalCash.toFixed(2)))}
                </td>
                <td className="text-end">
                  {formatNumberToIndianFormat(
                    parseFloat(grandTotal.toFixed(2))
                  )}
                </td>
              </tr>
            </tbody>
          </table>
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
         </>
        )}
      </div>
    </div>
  );
};

export default UfcWiseNetsales;
