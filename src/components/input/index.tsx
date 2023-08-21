import './input.css';
import React, { ChangeEvent } from 'react';

interface InputProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  value,
  name,
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className="styled-input">
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
