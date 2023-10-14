import React, { useState } from "react";
import Loader from "./Loader";
import { UfcApi } from "../Retail/RetailApi/RegionApi";
import RmSalesTable from "./RmTable";
import { useMemo } from "react";
import { useDataContext } from "../../Context/DataContext";

const UfcTable = ({region}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
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
      employee_id: emp_id,
      emprole: emproles,
      quarter: "202324Q2",
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      select_type: rolwiseselectype,
      scheme_code: "nill",
      channel: channel,
      zone: "",
      region: region,
      ufc: "",
      rm: "nill",
      common_report: "INT_REGIONWISE",
      page_number: '',
      page_size: ''
    });
  }, [emp_id,
    formattedStartDate,
    formattedEndDate,
    rolwiseselectype,
    region,
    emproles,
    channel
  ]);

  const { ufc } = UfcApi(queryParams);
  let dataToUse = [];

  if (ufc && ufc.length > 0) {
    dataToUse = ufc;
  } else if (
    summary_report &&
    summary_report.length > 0
  ) {
    dataToUse = summary_report;
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
      <div className="new-component container-fluid scrollbarRegion">
        <table className="mt-3 table nested-table">
          <thead style={{ backgroundColor: "#4C6072", color: "white" }}>
            <tr className="">
              <th rowSpan="2" className="border-end border-1" style={{ lineHeight: "4" }}>
                UFC code
              </th>
              <th rowSpan="2" className="border-end border-1" style={{ lineHeight: "4" }}>
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
          <tbody style={{ backgroundColor: "#8080805c" }}>
            {dataToUse.map((ufc, index) => {
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
                          <RmSalesTable ufc={ufc.UFC_CODE}/>
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

export default UfcTable;
