import React from 'react';
import CardDetails from '../card-details';
import './card-detail-list.css';
import Button from '../button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { openModal } from '../../store/reducers/modalReducer';

interface CardDetailsListProps {
  label?: string | null | undefined;
  data: DataProps[];
  setData: (data: DataProps[]) => void;
  addInput?: boolean;
  addButton?: boolean;
  dropdownTitles?: any[];
  dropdownNextClick?: (item: DataProps, nextStatus: string) => void;
  dropdownDeleteClick?: (item: DataProps) => void;
  updatedItem?: (item: DataProps) => void;
  addItem?: (item: DataProps) => void;
  item?: { id: number | undefined; title: string };
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
  item,
  // addInput = false,
  // addButton = false,
  // dropdownTitles = [],
  // dropdownNextClick,
  // dropdownDeleteClick,
  // updatedItem,
  // addItem,
}) => {
  const dispatch = useAppDispatch();
  // const [valueInput, setValueInput] = useState<string>('');
  // const [valueInputUpdate, setValueInputUpdate] = useState<string>('');
  // const [isShow, setIsShow] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  // const [selectedItem, setSelectedItem] = useState<DataProps>({
  //   id: 0,
  //   name: '',
  //   status: '',
  // });

  // const showInput = () => {
  //   setIsShow(true);
  // };

  // const handleSubmit = () => {
  //   if (addItem) {
  //     addItem({ id: new Date().getTime(), name: valueInput, status: 'todo' });
  //   }
  // };

  // const handleSubmitUpdate = () => {
  //   if (updatedItem) {
  //     updatedItem({ ...selectedItem, name: valueInputUpdate });
  //   }
  // };

  // const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     handleSubmit();
  //     setIsShow(false);
  //     setValueInput('');
  //   }
  // };
  // const handleKeyPressUpdate = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     setValueInputUpdate('');
  //     setIsEdit(false);
  //     handleSubmitUpdate();
  //   }
  // };

  // const dropdownStatusNext = (title: string | null | undefined) => {
  //   let dropdownName = '';
  //   const dropdownIndex = dropdownTitles.indexOf(title);

  //   if (dropdownIndex !== -1 && dropdownIndex < dropdownTitles.length - 1) {
  //     dropdownName = dropdownTitles[dropdownIndex + 1];
  //   } else {
  //     dropdownName = '';
  //   }

  //   return dropdownName;
  // };

  // const titleFormatted = (title: string | null | undefined) => {
  //   if (title) {
  //     if (title.split('_')[1]) {
  //       return title
  //         .split('_')
  //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //         .join(' ');
  //     } else {
  //       return title.charAt(0).toUpperCase() + title.slice(1);
  //     }
  //   }
  // };

  // const getDropdowns = (item: DataProps) => {
  //   let dropdownArr: any[] = [];

  //   if (dropdownStatusNext(item.status)) {
  //     dropdownArr.push({
  //       name: titleFormatted(dropdownStatusNext(item.status)),
  //       click: () =>
  //         dropdownNextClick &&
  //         dropdownNextClick(item, dropdownStatusNext(item.status)),
  //     });
  //   } else {
  //     dropdownArr = [];
  //   }

  //   const updateAndRemove = [
  //     {
  //       name: 'Update',
  //       click: () => {
  //         setIsEdit(true);
  //         setSelectedItem(item);
  //         setValueInputUpdate(item.name);
  //       },
  //     },
  //     {
  //       name: 'Delete',
  //       click: () => {
  //         dropdownDeleteClick && dropdownDeleteClick(item);
  //       },
  //     },
  //   ];

  //   return [...dropdownArr, ...updateAndRemove];
  // };

  return (
    <div className="styled-card-detail-list">
      {/* {addButton && (
        <div className="styled-card-detail-list-button">
          <Button
            label="Add Card"
            onClick={showInput}
            backgroundColour="blue"
          />
        </div>
      )} */}
      <div className="styled-card-detail-list-label">{label}</div>
      {/* {isShow && addInput && (
        <div className="styled-card-detail-list-input">
          <Input
            value={valueInput}
            onChange={setValueInput}
            onKeyUp={handleKeyPress}
            maxWidth
          />
        </div>
      )} */}
      {/* {isEdit && (
        <div className="styled-card-detail-list-input">
          <Input
            value={valueInputUpdate}
            onChange={setValueInputUpdate}
            onKeyUp={handleKeyPressUpdate}
            maxWidth
          />
        </div>
      )} */}
      {data.length > 0 && (
        <div className="styled-card-detail-list-cardDetails">
          {data.map((item) => (
            <CardDetails
              key={item.id}
              label={item.name}
              // dropdown={getDropdowns(item)}
              color={item.status === 'done' ? 'gray' : 'white'}
              status={item.status}
            />
          ))}
        </div>
      )}
      <Button
        label="Add Card"
        onClick={() =>
          dispatch(
            openModal({
              component: 'add-card',
              title: 'Add Card',
              meta: { item },
            })
          )
        }
        maxWidth
        backgroundColour="blue"
        colour="white"
        marginTop={10}
      />
    </div>
  );
};

export default CardDetailsList;
