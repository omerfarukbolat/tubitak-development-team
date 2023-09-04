import './input.css';
import React, { ChangeEvent, KeyboardEventHandler } from 'react';

interface InputProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  maxWidth?: boolean;
  onChange: (newValue: string) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;

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
      <input
        className="styled-input-form"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleInputChange}
        onKeyDown={onKeyDown as (event: React.KeyboardEvent<HTMLInputElement>) => void}
        />
    </div>
  );
};

export default Input;
