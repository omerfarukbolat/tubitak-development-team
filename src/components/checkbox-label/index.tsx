import React from "react";
import "./index.css";

interface CheckboxLabelProps {
  label: string;
  isCompleted: boolean;
  setIsCompleted: () => void;
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ label, isCompleted, setIsCompleted }) => {
  const handleCheckboxChange = () => {
    setIsCompleted();
  };

  return (
    <label className={`styled-checkbox-label ${isCompleted ? "checked" : ""}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange} />
      <span className="styled-checkbox-label-text">
        {label}
      </span>
    </label>
  );
};

export default CheckboxLabel;
