import React from 'react';
import './index.css';

interface SelectButtonProps {
  label?: string;
  data:string;
  color?: 'black' | 'white';
  backgroundColor?: 'blue' | 'green'; 
  SetActive: () => void;
  isActive?: boolean;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  label,
  data,
  color,
  backgroundColor,
  SetActive,
  isActive = false,
}: SelectButtonProps) => {
  const handleButtonClick = () => {
    SetActive();
  };

  const buttonStyle: React.CSSProperties = {
    color: isActive ? 'white' : color || 'black',
    backgroundColor: isActive ? '#527cf8' : backgroundColor || '#dcdcdc',
  };

  return (
    <button className='styled-select-button'
      onClick={handleButtonClick}
      style={buttonStyle}
    >
      {data}
    </button>
  );
};

export default SelectButton;
