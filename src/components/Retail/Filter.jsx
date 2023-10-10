import React, { useState } from "react";
import "./Filter.css";
import filter from "../Assets/images/table_icon.png";
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTables, setSelectedTables] = useState([]);

  const handleToggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleTableSelection = (tableName) => {
    setSelectedTables((prevSelectedTables) => {
      if (prevSelectedTables.includes(tableName)) {
        return prevSelectedTables.filter((table) => table !== tableName);
      } else {
        return [...prevSelectedTables, tableName];
      }
    });
  };

  const closeTab = () => {
    console.log("Selected tables:", selectedTables);
  };

  return (
    <div className="form-group mt-4 ">
      <label>
        <img src={filter} alt="filter" />
        <b> Select Table</b>
      </label>
      <br/>
      <div className={`custom-dropdown ${isOpen ? "active" : ""}`}>
        <button
          className="form-control dropdown-toggle mt-2"
          onClick={handleToggleDropdown}
        >
          Select Column
        </button>
        <div className="dropdown-menu">
          <div>
            <input
              type="checkbox"
              id="salesCheckbox"
              name="tables"
              value="Sales"
              onChange={() => handleTableSelection("Sales")}
            />
            <label htmlFor="salesCheckbox">Sales</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="redemptionCheckbox"
              name="tables"
              value="Redemption"
              onChange={() => handleTableSelection("Redemption")}
            />
            <label htmlFor="redemptionCheckbox">Redemption</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="netSalesCheckbox"
              name="tables"
              value="Net Sales"
              onChange={() => handleTableSelection("Net Sales")}
            />
            <label htmlFor="netSalesCheckbox">Net Sales</label>
          </div>
          <div>
            <button
              className="btn BgcolorOrange text-white mrgl"
              onClick={closeTab}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
