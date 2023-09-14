import React from 'react';
import './card-details.css';
import { openModal } from '../../store/reducers/modalReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface CardDetailsProps {
  label?: string;
  color?: 'white' | 'gray';
  title?: string;
  cardItemId: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  label,
  color = 'white',
  title,
  cardItemId,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`styled-card-detail colour-${color}`}
      onClick={() =>
        dispatch(
          openModal({
            component: 'update-card',
            title: 'Update Card',
            meta: { id: cardItemId, name: label, title: title },
          })
        )
      }
    >
      <div className="styled-card-detail-form">{label}</div>
    </div>
  );
};

export default CardDetails;
