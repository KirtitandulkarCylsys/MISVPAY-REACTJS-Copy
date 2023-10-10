import React, { useState } from "react";
import "./SubTable-CSS/SubSalesTable.css";
import Loader from "../Loader";
import { RegionApi } from "../../Retail/RetailApi/RegionApi";
import { useMemo } from "react";
import Api from "../../Retail/RetailApi/Api";
import UfcTable from "./UFC/UfcTable";

const RegionTable = ({
  formatNumberToIndianFormat,
  select_type,
  startDate,
  endDate,
  zone,
  transaction_summary_report,
}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
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
      zone: zone,
      region: "",
      ufc: "",
      rm: "nill",
      common_report: "INT_ZONEWISE",
    });
  }, [
    formattedStartDate,
    formattedEndDate,
    select_type,
    zone,
    emproles,
    channel,
  ]);
  const { regions, loading } = RegionApi(queryParams);
  let dataToUse = [];

  if (regions && regions.length > 0) {
    dataToUse = regions;
  } else if (
    transaction_summary_report &&
    transaction_summary_report.length > 0
  ) {
    dataToUse = transaction_summary_report;
  }

  // Rest of your component remains the same
  const handleButtonClick = (index) => {
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
    <div className="new-component container-fluid p-0">
      <table
        className="mt-3 table nested-table"
        style={{
          backgroundColor: "white",
          border: "2px solid",
          borderColor: "#EE8B3A",
          borderBottomColor: "white",
        }}
      >
        <thead>
          <tr className="colorwhite BgcolorOrange">
            <th rowSpan="2" className="border-1 border-end">
              Region
            </th>
            <th colspan="7" className="border-1 border-end ">
              Sales
            </th>
            <th colspan="7" className="border-1 border-end ">
              Redemption
            </th>
            <th colspan="7">NetSales</th>
          </tr>
          <tr className="colorwhite BgcolorOrange">
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
          {dataToUse.map((summary, index) => {
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
                    >
                      <b className="sharp-font">{summary.REGION}</b>
                    </button>
                    {loading && (
                      <div className="text-center mt-4">
                        <i className="fas fa-spinner fa-spin fa-2x loder"></i>{" "}
                        <Loader className="loder" />
                      </div>
                    )}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SEQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(
                      parseFloat(summary.SFIXED_INCOME)
                    )}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.SCASH))}
                  </td>
                  <td className="text-end color-biege" id="total">
                    {formatNumberToIndianFormat(parseFloat(summary.STOTAL))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.REQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.RHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.RARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.RPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(
                      parseFloat(summary.RFIXED_INCOME)
                    )}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.RCASH))}
                  </td>
                  <td className="text-end" id="total">
                    {formatNumberToIndianFormat(parseFloat(summary.RTOTAL))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.NEQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.NHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.NARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.NPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(
                      parseFloat(summary.NFIXED_INCOME)
                    )}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(summary.NCASH))}
                  </td>
                  <td className="text-end" id="total">
                    {formatNumberToIndianFormat(parseFloat(summary.NTOTAL))}
                  </td>
                </tr>
                {clickedIndex === index && (
                  <tr key={`subtable-${index}`}>
                    <td colSpan="23" className="p-0">
                      {clickedIndex === index && (
                        <UfcTable
                          formatNumberToIndianFormat={
                            formatNumberToIndianFormat
                          }
                          startDate={startDate}
                          endDate={endDate}
                          select_type={select_type}
                          region={summary.REGION}
                        />
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
          <tr className="colorwhite BgcolorOrange">
            <td>TOTAL</td>
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
              {formatNumberToIndianFormat(parseFloat(totalPassive.toFixed(2)))}
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
  );
};

export default RegionTable;
