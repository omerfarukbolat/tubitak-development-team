import './input.css';
import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  maxWidth?: boolean;
  onChange: (newValue: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void; 

}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  value,
  name,
  maxWidth = false,
  onKeyDown,
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className={`styled-input ${maxWidth ? 'maxWidth' : ''}`}>
      <label className="styled-input-label">{label}</label>
      <input
        className="styled-input-form"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
