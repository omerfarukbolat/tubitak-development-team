import React from 'react';
import './card-details.css';

interface CardDetailsProps {
  label?: string;
  color?: 'white' | 'gray';
  onClick?: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  label,
  color = 'white',
  onClick,
}) => {
  return (
    <div className={`styled-card-detail colour-${color}`} onClick={onClick}>
      <div className="styled-card-detail-form">{label}</div>
    </div>
  );
};

export default CardDetails;
