import React, { useState, KeyboardEvent } from 'react';
import Button from '../button';
import CardDetails from '../card-details';
import Input from '../input';
import './card-detail-list.css';

interface CardDetailsListProps {
  label?: string;
  dropdown: DropdownProps[];
  data: DataProps[];
  setData: (data: DataProps[]) => void;
}

interface DropdownProps {
  name: string;
  click: () => void;
}

export interface DataProps {
  id: number;
  name: string;
}

const CardDetailsList: React.FC<CardDetailsListProps> = ({
  label,
  dropdown,
  data,
  setData,
}) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [isShow, setIsShow] = useState(false);
  const [isAddCardDetails, setIsAddCardDetails] = useState(false);

  const showInput = () => {
    setIsShow(true);
  };

  const handleSubmit = () => {
    setData([...data, { name: valueInput, id: new Date().getTime() }]);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="styled-card-detail-list">
      <div className="styled-card-detail-list-button">
        <Button label="Add Card" onClick={showInput} />
      </div>
      <div className="styled-card-detail-list-label">{label}</div>
      {isShow && (
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
          <CardDetails label={data[0].name} dropdown={[]} />
        </div>
      )}
      {data.length > 0 && (
        <div className="styled-card-detail-list-cardDetails">
          {data.map((item) => (
            <CardDetails key={item.id} label={item.name} dropdown={[]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetailsList;
