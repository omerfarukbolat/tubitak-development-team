import './input.css';
import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  maxWidth?: boolean;
  onChange: (newValue: string) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const UpdateInput: React.FC<InputProps> = ({
  placeholder,
  label,
  value,
  name,
  maxWidth = false,
  onChange,
  onKeyUp,
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
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default UpdateInput;
