import React from "react";
import "./index.css";

interface CheckboxLabelProps {
  label: string;
  active: boolean;
  setActive: () => void;
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ label, active, setActive }) => {
  const handleCheckboxChange = () => {
    setActive();
  };

  return (
    <label className={`styled-checkbox-label ${active ? "checked" : ""}`}>
      <input
        type="checkbox"
        checked={active}
        onChange={handleCheckboxChange} />
      <span className="styled-checkbox-label-text">
        {label}
      </span>
    </label>
  );
};

export default CheckboxLabel;
