import './textArea.css';
import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  placeholder?: string;
  label?: string;
  value: string;
  name?: string;
  maxWidth?: boolean;
  height?: number;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  value,
  name,
  height = 150,
  maxWidth = false,
  onChange,
}) => {
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className={`styled-textArea ${maxWidth ? 'maxWidth' : ''}`}>
      <label className="styled-textArea-label">{label}</label>
      <textarea
        className="styled-textArea-form"
        style={{ height }}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleTextAreaChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
