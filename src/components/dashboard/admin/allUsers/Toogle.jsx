import React, { useState } from "react";
import "./toggle.css";

const Toggle = ({ onChange, checked, userId, isDisabled }) => {
  const [isChecked, setIsChecked] = useState(checked);



  const handleToggleChange = () => {
    if (!isDisabled) {
      setIsChecked(!isChecked); // Toggle the state when the switch changes
      if (onChange) {
        onChange(!isChecked, userId); // Pass the new state to the parent component
      }
    }
  };

  return (
    <>
      <div className="toggle-wrapper">
        <input
          className="toggle-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <div className="toggle-container">
          <div className="toggle-button">
            <div className="toggle-button-circles-container">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="toggle-button-circle"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
