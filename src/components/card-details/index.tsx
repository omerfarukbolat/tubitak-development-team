import React from 'react';
import './card-details.css';
// import Dropdown from '../dropdown/index';
import { openModal } from '../../store/reducers/modalReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface CardDetailsProps {
  label?: string;
  dropdown: DropdownProps[];
  color?: 'white' | 'gray';
}

interface DropdownProps {
  name: string;
  click: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  label,
  // dropdown,
  color = 'white',
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
          })
        )
      }
    >
      <div className="styled-card-detail-form">{label}</div>
      {/* <div className="styled-card-detail-dropdown">
        <Dropdown data={dropdown} />
      </div> */}
    </div>
  );
};

export default CardDetails;
