import React, { useState } from "react";
import "./index.css";

interface checkboxlabelProps {
  label: string;
  active: boolean;
  setActive: () => void;
}

const CheckboxLabel: React.FC<checkboxlabelProps> = ({ label, active, setActive }) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleCheckboxChange = () => {
    setActive();
    setIsChecked(!isChecked);
  };

  return (
    <label className={`styled-checkbox-label ${isChecked ? "checked" : ""}`}>
      <input 
      type="checkbox" 
      checked={isChecked} 
      onChange={handleCheckboxChange} />
      {label}
    </label>
  );
};

export default CheckboxLabel;
