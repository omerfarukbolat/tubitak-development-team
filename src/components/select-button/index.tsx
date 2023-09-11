import React from 'react';
import './index.css';
import Button from '../../components/button';

interface SelectButtonProps {
  label: string;
  data: string[];
  isActive: string | null;
  setIsActive: (isActive: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  label,
  data,
  isActive,
  setIsActive,
}: SelectButtonProps) => {
  return (
    <div className="styled-select-button">
      <label className="styled-select-button-label">{label}</label>
      <div className="styled-select-button-list">
        {data.map((item, index) => (
          <Button
            key={index}
            label={item}
            colour={item === isActive ? 'white' : 'black'}
            backgroundColour={item === isActive ? 'blue' : 'grey'}
            onClick={() => setIsActive(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectButton;
