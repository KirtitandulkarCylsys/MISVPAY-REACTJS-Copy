import React, { useState } from "react";
import Loader from "./Loader";
import { RegionApi } from "../Retail/RetailApi/RegionApi";
import { useMemo } from "react";
import UfcTable from "./UfcTable";
import "./RegionTable.css";
import { useDataContext } from "../../Context/DataContext";

const RegionTable = ({zone }) => {

  const [clickedIndex, setClickedIndex] = useState(-1);

  const {
    emproles,
    start_Date,
    end_Date,
    emp_id,
    rolwiseselectype,
    channel,
    summary_report,formatNumberToIndianFormat
  } = useDataContext();

  const formattedStartDate = start_Date?.split("-").reverse().join("/");
  const formattedEndDate = end_Date?.split("-").reverse().join("/");
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
      zone: zone,
      region: "",
      ufc: "",
      rm: "nill",
      common_report: "INT_ZONEWISE",
      page_number: "",
      page_size: "",
    });
  }, [
    emp_id,
    formattedStartDate,
    formattedEndDate,
    rolwiseselectype,
    zone,
    emproles,
    channel,
  ]);
  const { regions, loading } = RegionApi(queryParams);

  let dataToUse = [];
  if (regions && regions.length > 0) {
    dataToUse = regions;
  } else if (summary_report && summary_report.length > 0) {
    dataToUse = summary_report;
  }

  const handleButtonClick = (index) => {
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
    <div className="new-component container-fluid p-0 scrollbarRegion">
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
            <th
              rowSpan="2"
              className="border-1 border-end text-center"
              style={{ lineHeight: "4" }}
            >
              Region
            </th>
            <th colspan="7" className="border-1 border-end text-center ">
              Sales
            </th>
            <th colspan="7" className="border-1 border-end text-center ">
              Redemption
            </th>
            <th colspan="7" className="text-center">
              NetSales
            </th>
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
                        <UfcTable region={summary.REGION} />
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
  );
};

export default RegionTable;
