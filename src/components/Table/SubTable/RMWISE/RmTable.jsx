import React from "react";
import { RMApi } from "../../../Retail/RetailApi/RegionApi";
import { useMemo } from "react";
import Api from "../../../Retail/RetailApi/Api";

const RmTable = ({
  formatNumberToIndianFormat,
  select_type,
  startDate,
  endDate,
  ufc,
  transaction_summary_report,
}) => {
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
      region: "",
      ufc: ufc,
      rm: "nill",
      common_report: "INT_UFCWISE",
    });
  }, [
    formattedStartDate,
    formattedEndDate,
    select_type,
    ufc,
    emproles,
    channel,
  ]);

  const { rm } = RMApi(queryParams);
  let dataToUse = [];

  if (rm && rm.length > 0) {
    dataToUse = rm;
  } else if (
    transaction_summary_report &&
    transaction_summary_report.length > 0
  ) {
    dataToUse = transaction_summary_report;
  }
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
          <thead
            style={{ backgroundColor: "rgb(58 94 147 / 98%)", color: "white" }}
          >
            <tr className="">
              <th scope="col" rowSpan="2"  className="border-end border-1">
                RM Code
              </th>
              <th scope="col" rowSpan="2"  className="border-end border-1">
                EMPLOYEE NAME
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
          <tbody>
            {dataToUse.map((rm) => {
              totalEquity += parseFloat(rm.SEQUITY);
              totalHybrid += parseFloat(rm.SHYBRID);
              totalArbitrage += parseFloat(rm.SARBITRAGE);
              totalPassive += parseFloat(rm.SPASSIVE);
              totalFixedIncome += parseFloat(rm.SFIXED_INCOME);
              totalCash += parseFloat(rm.SCASH);
              grandTotal += parseFloat(rm.STOTAL);
              return (
                <tr style={{ backgroundColor: "#dee2e69c" }}>
                  <td>
                    <button className="textlink">
                      <b className="sharp-font">{rm.RMCODE}</b>
                    </button>
                  </td>
                  <td>{rm.EMP_NAME}</td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.SEQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.SHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.SARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.SPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.SFIXED_INCOME))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.SCASH))}
                  </td>
                  <td className="text-end">
                    <b>{formatNumberToIndianFormat(parseFloat(rm.STOTAL))}</b>
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.REQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.RHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.RARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.RPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.RFIXED_INCOME))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.RCASH))}
                  </td>
                  <td className="text-end">
                    <b>{formatNumberToIndianFormat(parseFloat(rm.RTOTAL))}</b>
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.NEQUITY))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.NHYBRID))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.NARBITRAGE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.NPASSIVE))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.NFIXED_INCOME))}
                  </td>
                  <td className="text-end">
                    {formatNumberToIndianFormat(parseFloat(rm.NCASH))}
                  </td>
                  <td className="text-end">
                    <b>{formatNumberToIndianFormat(parseFloat(rm.NTOTAL))}</b>
                  </td>
                </tr>
              );
            })}
            <tr
              style={{
                backgroundColor: "rgb(58 94 147 / 98%)",
                color: "white",
              }}
            >
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

export default RmTable;
