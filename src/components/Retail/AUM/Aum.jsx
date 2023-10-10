import React from "react";
import {  useNavigate } from "react-router-dom";
import "./Aum.css";
import LoaderSearch from "../../Table/SubTable/LoaderSearch";

const Aum = ({aum_period, loading, report_period}) => {
const navigate = useNavigate();
  const formatNumberToIndianFormat = (number) => {
    if (typeof number !== "number") {
      return number;
    }

    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleZoneClick = (zone) => {
    navigate(`/AumRegionReport/${zone}/${report_period}`);
  };
  
  return (
    <div className="container-fluid">
      {loading ? (
        <div>
          <LoaderSearch />
        </div>
      ) : (
        <div className="card" style={{ paddingLeft: "10px" }}>
          <div className="d-flex" style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
            <div className="col-md-3 d-flex">
              <h4>
                <b>SALES</b>
              </h4>
              <h5>
                <b className="gray-color">(In Lakhs)</b>
              </h5>
            </div>
          </div>
        </div>
      )}

      {!loading && (
        <table className="table table-bordered active" id="AUM">
          <thead className="Aum-Head">
            <tr className="mid">
              <th rowSpan="2"  style={{ lineHeight: "4" }}>
                Zone
              </th>
              <th rowSpan="2"  style={{ lineHeight: "4" }}>
                Total AUM
              </th>
              <th colSpan="6">AUM</th>
            </tr>
            <tr>
              <th className="forright">Equity</th>
              <th className="forright">Hybrid</th>
              <th className="forright">Arbitrage</th>
              <th className="forright">Passive</th>
              <th className="forright">Fixed Income</th>
              <th className="forright">Cash</th>
            </tr>
          </thead>
          <tbody>
            {aum_period.map((item) => (
              <tr key={item.ZONE}>
                <td>
                <button
                    className="textlink"
                    onClick={() => handleZoneClick(item.ZONE)}
                  >
                    {item.ZONE}
                  </button>
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.TOTAL_AUM))}
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.EQUITY_AUM))}
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.HYBRID_AUM))}
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.ARBITRAGE_AUM))}
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.PASSIVE_AUM))}
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.FIXED_INCOME_AUM))}
                </td>
                <td className="forright">
                  {formatNumberToIndianFormat(parseFloat(item.CASH_AUM))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Aum;
