import './input.css';
import React, { ChangeEvent, KeyboardEventHandler, KeyboardEvent } from 'react';

interface InputProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  maxWidth?: boolean;
  width?: number;
  onChange: (newValue: string) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  backgroundColor?: 'white' | 'gray';
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  value,
  name,
  maxWidth = false,
  width = 260,
  onKeyDown,
  onChange,
  onKeyUp,
  backgroundColor = 'white',
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div style={{ width: maxWidth ? '100%' : width }} className="styled-input">
      {label && <label className="styled-input-label">{label}</label>}
      <input
        className={`styled-input-form backgroundColor-${backgroundColor}`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleInputChange}
        onKeyDown={
          onKeyDown as (event: React.KeyboardEvent<HTMLInputElement>) => void
        }
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default Input;
