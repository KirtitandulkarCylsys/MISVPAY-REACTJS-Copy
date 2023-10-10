import React, { useState } from "react";
import Loader from "../../Loader";
import { UfcApi } from "../../../Retail/RetailApi/RegionApi";
import RmSalesTable from "../RMWISE/RmTable";
import { useMemo } from "react";
import Api from "../../../Retail/RetailApi/Api";

const UfcTable = ({
  formatNumberToIndianFormat,
  select_type,
  startDate,
  endDate,
  region,
  transaction_summary_report,
}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const formattedStartDate = startDate.split("-").reverse().join("/");
  const formattedEndDate = endDate.split("-").reverse().join("/");
  const { emproles, channel } = Api();

  const queryParams = useMemo(() => {
    return new URLSearchParams({
      employee_id: "1234",
      emprole: emproles,
      quarter: "202324Q2",
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      select_type: select_type,
      scheme_code: "nill",
      channel: channel,
      zone: "",
      region: region,
      ufc: "",
      rm: "nill",
      common_report: "INT_REGIONWISE",
    });
  }, [
    formattedStartDate,
    formattedEndDate,
    select_type,
    region,
    emproles,
    channel,
  ]);

  const { ufc } = UfcApi(queryParams);
  let dataToUse = [];

  if (ufc && ufc.length > 0) {
    dataToUse = ufc;
  } else if (
    transaction_summary_report &&
    transaction_summary_report.length > 0
  ) {
    dataToUse = transaction_summary_report;
  }
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

  let totalEquity = 0;
  let totalHybrid = 0;
  let totalArbitrage = 0;
  let totalPassive = 0;
  let totalFixedIncome = 0;
  let totalCash = 0;
  let grandTotal = 0;

  return (
    <>
      <div className="new-component container-fluid ">
        <table className="mt-3 table nested-table">
          <thead style={{ backgroundColor: "#4C6072", color: "white" }}>
            <tr className="">
              <th rowSpan="2" className="border-end border-1">
                UFC code
              </th>
              <th rowSpan="2" className="border-end border-1">
                UFC
              </th>
              <th colspan="7" className="border-1 ">
                Sales
              </th>
              <th colspan="7" className="border-1 ">
                Redemption
              </th>
              <th colspan="7" className="border-1 ">
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
          <tbody style={{ backgroundColor: "#8080805c" }}>
            {dataToUse.map((ufc, index) => {
              totalEquity += parseFloat(ufc.SEQUITY);
              totalHybrid += parseFloat(ufc.SHYBRID);
              totalArbitrage += parseFloat(ufc.SARBITRAGE);
              totalPassive += parseFloat(ufc.SPASSIVE);
              totalFixedIncome += parseFloat(ufc.SFIXED_INCOME);
              totalCash += parseFloat(ufc.SCASH);
              grandTotal += parseFloat(ufc.STOTAL);

              return (
                <React.Fragment key={index}>
                  <tr>
                    <td>
                      <button
                        className="textlink"
                        onClick={() => handleButtonClick(index)}
                        disabled={isLoading}
                      >
                        <b className="sharp-font">{ufc.UFC_CODE}</b>
                      </button>
                      {isLoading && (
                        <div className="text-center mt-4">
                          <i className="fas fa-spinner fa-spin fa-2x loder"></i>{" "}
                          <Loader className="loder" />
                        </div>
                      )}
                    </td>
                    <td>{ufc.UFC_NAME}</td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.SEQUITY))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.SHYBRID))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.SARBITRAGE))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.SPASSIVE))}
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
                        {formatNumberToIndianFormat(parseFloat(ufc.STOTAL))}
                      </b>
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.REQUITY))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RHYBRID))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RARBITRAGE))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.RPASSIVE))}
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
                        {formatNumberToIndianFormat(parseFloat(ufc.RTOTAL))}
                      </b>
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.NEQUITY))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.NHYBRID))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.NARBITRAGE))}
                    </td>
                    <td className="text-end">
                      {formatNumberToIndianFormat(parseFloat(ufc.NPASSIVE))}
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
                        {formatNumberToIndianFormat(parseFloat(ufc.NTOTAL))}
                      </b>
                    </td>
                  </tr>
                  {clickedIndex === index && (
                    <tr key={`subtable-${index}`}>
                      <td colSpan="23" className="p-0">
                        {clickedIndex === index && (
                          <RmSalesTable
                            formatNumberToIndianFormat={
                              formatNumberToIndianFormat
                            }
                            startDate={startDate}
                            endDate={endDate}
                            select_type={select_type}
                            ufc={ufc.UFC_CODE}
                          />
                        )}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
            <tr style={{ backgroundColor: "#4C6072", color: "white" }}>
              <td>TOTAL</td>
              <td></td>
              <td className="text-end">
                {formatNumberToIndianFormat(parseFloat(totalEquity.toFixed(2)))}
              </td>
              <td className="text-end">
                {formatNumberToIndianFormat(parseFloat(totalHybrid.toFixed(2)))}
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
                {formatNumberToIndianFormat(parseFloat(grandTotal.toFixed(2)))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UfcTable;
