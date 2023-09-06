import React, { useState } from 'react';
import CheckboxLabel from '../checkbox-label';
import Dropdown from '../dropdown';
import './index.css';

interface CheckboxListData {
  id: number;
  label: string;
  isCompleted: boolean;
}

interface DropdownData {
  name: string;
  click: () => void;
}

interface CheckboxListProps {
  data: CheckboxListData[];
  dropdownData: DropdownData[];
  onCheckboxChange: (taskId: number, isCompleted: boolean) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ data, dropdownData, onCheckboxChange }) => {
  const [checkboxData, setCheckboxData] = useState(data.map((item) => ({ ...item })));

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].isCompleted = !updatedCheckboxData[index].isCompleted;
    setCheckboxData(updatedCheckboxData);
    onCheckboxChange(updatedCheckboxData[index].id, updatedCheckboxData[index].isCompleted);
  };

  return (
    <div className="styled-checkbox-list">
      {data.map((item, index) => (
        <div className="styled-checkbox-list-checkboxLabel" key={index}>
          <CheckboxLabel
            label={item.label}
            setIsCompleted={() => handleCheckboxChange(index)}
            isCompleted={item.isCompleted}
          />
          <div className="styled-checkbox-list-dropdown">
            <Dropdown data={dropdownData} isReverse={false} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
