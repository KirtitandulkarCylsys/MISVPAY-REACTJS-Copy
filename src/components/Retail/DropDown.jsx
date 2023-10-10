import React, { useState } from "react";
import "./DropDown.css";

const DropDown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="form-group  mt-4">
      <label htmlFor="">
        <b>Select Column</b>
      </label>
      <br/>
      <div className="dropdown">
        <div className="custom-dropdown">
          <button
            className="form-control dropdown-toggle  mt-2"
            onClick={toggleDropdown}
          >
            Select Column
          </button>
          <div
            className="dropdown-content"
            id="checkboxContainer"
            style={{ display: dropdownVisible ? "block" : "none" }}
          >
            <label htmlFor="" className="BgcolorOrange2 colorwhite m-0">
              Sales
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item1" /> Zone
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item2" /> Equity{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item3" /> Hybrid
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item4" />
              Arbitrage{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item5" />{" "}
              Passive(ex-Debt)
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item6" /> Fixed
              Income
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item7" /> Cash{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item8" /> Total
            </label>
            <br />
            <label htmlFor="" className="BgcolorOrange2 colorwhite m-0">
              Redemption
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item9" /> Zone
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item10" /> Equity{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item11" /> Hybrid
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item12" />
              Arbitrage{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item13" />{" "}
              Passive(ex-Debt)
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item14" /> Fixed
              Income
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item15" /> Cash{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item16" /> Total
            </label>
            <br />
            <label htmlFor="" className="BgcolorOrange2 colorwhite m-0">
              Net sales
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item17" /> Zone
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item18" /> Equity{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item19" /> Hybrid
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item20" />
              Arbitrage{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item21" />{" "}
              Passive(ex-Debt)
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item22" /> Fixed
              Income
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item23" /> Cash{" "}
            </label>
            <br />
            <label>
              <input type="checkbox" name="item" defaultValue="item24" /> Total
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

