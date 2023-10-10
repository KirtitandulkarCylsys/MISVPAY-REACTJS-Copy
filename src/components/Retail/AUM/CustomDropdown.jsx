import React, { useState } from "react";
import "../Retail.css";

export const CustomDropdown = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    const updatedSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    onChange(updatedSelectedOptions);
  };

  return (
    <div className="custom-dropdown form-control">
      <button className="custom-dropdown-toggle btn-hamburger" onClick={toggleDropdown}>
        Select Options
      </button>
      {isOpen && (
        <div className="custom-dropdown-options">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
