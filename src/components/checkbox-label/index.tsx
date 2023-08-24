import React, { useState } from "react";
import "./index.css";

interface checkboxlabelProps {
  label: string;

}

const CheckboxLabel: React.FC<checkboxlabelProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={`styled-checkbox-label ${isChecked ? "checked" : ""}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange} />

      <span className="styled-checkbox-label-text">
        {label}
      </span>

    </label>
  );
};

export default CheckboxLabel;
