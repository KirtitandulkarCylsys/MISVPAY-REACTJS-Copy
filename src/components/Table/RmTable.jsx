import React from "react";
import { RMApi } from "../Retail/RetailApi/RegionApi";
import { useMemo } from "react";
import { useDataContext } from "../../Context/DataContext";

const RmTable = ({ ufc}) => {
  const {
    emproles,
    start_Date,
    end_Date,
    emp_id,
    rolwiseselectype,
    channel,
    summary_report,formatNumberToIndianFormat
  } = useDataContext();

  const formattedStartDate = start_Date.split("-").reverse().join("/");
  const formattedEndDate = end_Date.split("-").reverse().join("/");
  const queryParams = useMemo(() => {
    return new URLSearchParams({
      employee_id:  emp_id,
      emprole: emproles,
      quarter: "202324Q2",
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      select_type: rolwiseselectype,
      scheme_code: "nill",
      channel: channel,
      zone: "",
      region: "",
      ufc: ufc,
      rm: "nill",
      common_report: "INT_UFCWISE",
      page_number: "",
      page_size: "",
    });
  }, [
    emp_id,
    formattedStartDate,
    formattedEndDate,
    rolwiseselectype,
    ufc,
    emproles,
    channel
  ]);

  const { rm } = RMApi(queryParams);
  let dataToUse = [];

  if (rm && rm.length > 0) {
    dataToUse = rm;
  } else if (
    summary_report &&
    summary_report.length > 0
  ) {
    dataToUse = summary_report;
  }
  const calculateTotal = (columnName) => {
    let total = 0;
    if (dataToUse && Array.isArray(dataToUse)) {
      dataToUse.forEach((item) => {
        total += parseFloat(item[columnName]);
      });
    }
    return total;
  };

  return (
    <>
      <div className="new-component container-fluid scrollbarRegion ">
        <table className="mt-3 table nested-table">
          <thead
            style={{ backgroundColor: "rgb(58 94 147 / 98%)", color: "white" }}
          >
            <tr className="">
              <th
                scope="col"
                rowSpan="2"
                className="border-end border-1 text-center"
                style={{ lineHeight: "4" }}
              >
                RM Code
              </th>
              <th
                scope="col"
                rowSpan="2"
                className="border-end border-1 text-center"
              >
                EMPLOYEE NAME
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
          <tbody>
            {dataToUse.map((rm) => {
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
    </>
  );
};

export default RmTable;
