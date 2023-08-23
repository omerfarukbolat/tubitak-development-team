import React from 'react';
import './card-details.css';
import Dropdown from '../dropdown/index';

interface CardDetailsProps {
  name?: string;
  label?: string;
  maxWidth?: boolean;
}

const CardDetails: React.FC<CardDetailsProps> = ({ label }) => {
  const handleDelete = () => {
    console.log('Delete event');
  };
  const handleEdit = () => {
    console.log('Edit event');
  };
  const handleNext = () => {
    console.log('Next event');
  };

  return (
    <div className="styled-card-detail">
      <span className="styled-card-detail-form">{label}</span>
      <Dropdown
        data={[
          {
            name: 'Next',
            click: handleNext,
          },
          {
            name: 'Edit',
            click: handleEdit,
          },
          {
            name: 'Delete',
            click: handleDelete,
          },
        ]}
      />
    </div>
  );
};

export default CardDetails;
