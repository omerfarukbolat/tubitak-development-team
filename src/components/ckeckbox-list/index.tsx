import React, { useState } from 'react';
import CheckboxLabel from '../checkbox-label';
import Dropdown from '../dropdown';
import './index.css';

interface CheckboxListData {
  label: string;
  active: boolean;
}

interface DropdownData {
  name: string;
  click: () => void;
}

interface CheckboxListProps {
  data: CheckboxListData[];
  dropdownData: DropdownData[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ data, dropdownData }) => {
  const [checkboxData, setCheckboxData] = useState(
    data.map((item) => ({ ...item }))
  );

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].active = !updatedCheckboxData[index].active;
    setCheckboxData(updatedCheckboxData);
  };

  return (
    <div className="styled-checkbox-list">
      {checkboxData.map((item, index) => (
        <div className="styled-checkbox-list-checkboxLabel" key={index}>
          <CheckboxLabel
            label={item.label}
            setActive={() => handleCheckboxChange(index)}
            active={item.active}
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
