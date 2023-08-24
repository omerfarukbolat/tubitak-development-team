import React from 'react';
import './card-details.css';
import Dropdown from '../dropdown/index';

interface CardDetailsProps {
  label?: string;
  data: DataProps[];
}

interface DataProps {
  name: string;
  click: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({ label, data }) => {
  return (
    <div className="styled-card-detail">
      <span className="styled-card-detail-form">{label}</span>
      <div className="styled-card-detail-dropdown">
        <Dropdown data={data} />
      </div>
    </div>
  );
};

export default CardDetails;
