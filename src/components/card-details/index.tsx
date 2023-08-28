import React from 'react';
import './card-details.css';
import Dropdown from '../dropdown/index';

interface CardDetailsProps {
  label?: string;
  dropdown: DropdownProps[];
}

interface DropdownProps {
  name: string;
  click: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({ label, dropdown }) => {
  return (
    <div className="styled-card-detail">
      <div className="styled-card-detail-form">{label}</div>
      <div className="styled-card-detail-dropdown">
        <Dropdown data={dropdown} />
      </div>
    </div>
  );
};

export default CardDetails;
