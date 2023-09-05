import React, { useState, KeyboardEvent } from 'react';
import Button from '../button';
import CardDetails from '../card-details';
import Input from '../input';
import './card-detail-list.css';

interface CardDetailsListProps {
  label?: string | null | undefined;
  data: DataProps[];
  setData: (data: DataProps[]) => void;
  addInput?: boolean;
  addButton?: boolean;
  dropdownTitles: any[];
  dropdownNextClick?: (item: DataProps, nextStatus: string) => void;
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
  data,
  setData,
  addInput = false,
  addButton = false,
  dropdownTitles = [],
  dropdownNextClick,
}) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [isShow, setIsShow] = useState(false);

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

  const dropdownStatusNext = (title: string | null | undefined) => {
    let dropdownName = '';
    const dropdownIndex = dropdownTitles.indexOf(title);

    if (dropdownIndex !== -1 && dropdownIndex < dropdownTitles.length - 1) {
      dropdownName = dropdownTitles[dropdownIndex + 1];
    } else {
      dropdownName = '';
    }

    return dropdownName;
  };

  const titleFormatted = (title: string | null | undefined) => {
    if (title) {
      if (title.split('_')[1]) {
        return title
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      } else {
        return title.charAt(0).toUpperCase() + title.slice(1);
      }
    }
  };

  const getDropdowns = (item: DataProps) => {
    let dropdownArr: any[] = [];

    if (dropdownStatusNext(item.status)) {
      dropdownArr.push({
        name: titleFormatted(dropdownStatusNext(item.status)),
        click: () =>
          dropdownNextClick &&
          dropdownNextClick(item, dropdownStatusNext(item.status)),
      });
    } else {
      dropdownArr = [];
    }

    const updateAndRemove = [
      {
        name: 'Update',
        click: () => console.log(item), // drpodownDeleteClick
      },
      {
        name: 'Delete',
        click: () => console.log(item), // dropdownUpdateClick
      },
    ];

    return [...dropdownArr, ...updateAndRemove];
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
      {data.length > 0 && (
        <div className="styled-card-detail-list-cardDetails">
          {data.map((item) => (
            <CardDetails
              key={item.id}
              label={item.name}
              dropdown={getDropdowns(item)}
              color={item.status === 'done' ? 'gray' : 'white'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardDetailsList;
