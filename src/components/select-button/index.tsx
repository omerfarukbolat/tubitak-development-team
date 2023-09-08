import React, { useState } from 'react';
import './index.css';

interface SelectButtonProps {
  label: string;
  data: { label: string; isActive: boolean }[];
}

const SelectButton: React.FC<SelectButtonProps> = ({
  label,
  data,
}: SelectButtonProps) => {
  const [buttonData, setButtonData] = useState(data);

  const handleButtonClick = (index: number) => {
    const updatedData = buttonData.map((item, i) => ({
      ...item,
      isActive: i === index, 
    }));
    setButtonData(updatedData);
  };

  return (
    <div className="styled-select-button-container">
      <label>{label}</label>
      <div className="styled-select-button-list">
        {buttonData.map((item, index) => (
          <button
            key={index}
            className={`styled-select-button${item.isActive ? ' active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectButton;
