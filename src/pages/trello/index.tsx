import React, { useState } from 'react';
import Input from '../../components/input';

const Trello: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <Input
        value={inputValue}
        placeholder=" Add a new task"
        onChange={handleInputChange}
      />
      {inputValue}
    </div>
  );
};

export default Trello;
