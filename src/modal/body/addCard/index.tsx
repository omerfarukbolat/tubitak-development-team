import { useState } from 'react';
import { ModalProps } from '../..';
import Button from '../../../components/button';
import Input from '../../../components/input';
import './addCard.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { setAddTrelloCard } from '../../../store/reducers/trelloReducer';

const AddCard: React.FC<ModalProps> = ({ closeModal, meta }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleAddCard = () => {
    dispatch(
      setAddTrelloCard({
        cardName: value,
        titleId: meta.item.id,
        titleName: meta.item.title,
      })
    );
    closeModal();
  };

  return (
    <div className="styled-add-card">
      <div className="styled-add-card-input">
        <Input value={value} onChange={setValue} maxWidth />
      </div>
      <div className="styled-add-card-buttons">
        <Button label="Cancel" onClick={closeModal} />
        <Button label="Add" onClick={handleAddCard} />
      </div>
    </div>
  );
};

export default AddCard;
