import React, { useState, KeyboardEvent } from 'react';
import Button from '../button';
import CardDetails from '../card-details';
import Input from '../input';
import './card-detail-list.css';

interface CardDetailsListProps {
  label?: string | null | undefined;
  dropdown: DropdownProps[];
  data: DataProps[];
  setData: (data: DataProps[]) => void;
  addInput?: boolean;
  addButton?: boolean;
}

export interface DropdownProps {
  name: string;
  click: () => void;
}

export interface DataProps {
  id: number;
  name: string;
  status: string;
}

const CardDetailsList: React.FC<CardDetailsListProps> = ({
  label,
  dropdown,
  data,
  setData,
  addInput = false,
  addButton = false,
}) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [isShow, setIsShow] = useState(false);
  const [isAddCardDetails, setIsAddCardDetails] = useState(false);

  const showInput = () => {
    setIsShow(true);
  };

  const handleSubmit = () => {
    setData([
      ...data,
      { id: new Date().getTime(), name: valueInput, status: 'Todo' },
    ]);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
      setIsShow(false);
      setValueInput('');
    }
  };

  return (
    <div className="styled-card-detail-list">
      {addButton && (
        <div className="styled-card-detail-list-button">
          <Button label="Add Card" onClick={showInput} />
        </div>
      )}
      <div className="styled-card-detail-list-label">{label}</div>
      {isShow && addInput && (
        <div className="styled-card-detail-list-input">
          <Input
            value={valueInput}
            onChange={setValueInput}
            onKeyUp={handleKeyPress}
          />
        </div>
      )}
      {isAddCardDetails && (
        <div className="styled-card-detail-list-cardDetails">
          <CardDetails label={data[0].name} dropdown={dropdown} />
        </div>
      )}
      {data.length > 0 && (
        <div className="styled-card-detail-list-cardDetails">
          {data.map((item) => (
            <CardDetails key={item.id} label={item.name} dropdown={dropdown} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetailsList;
