import { useEffect, useState } from 'react';
import { ModalProps } from '../..';
import Button from '../../../components/button';
import Input from '../../../components/input';
import SelectButton from '../../../components/select-button';
import './updateCard.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
  setRemoveTrelloCard,
  setUpdateTrelloCard,
} from '../../../store/reducers/trelloReducer';
import { useAppSelector } from '../../../hooks/useAppSelector';

const UpdateCard: React.FC<ModalProps> = ({ meta, closeModal }) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.trello.data);
  const [selectedTitle, setSelectedTitle] = useState(meta.title);

  const handleUpdateCard = () => {
    dispatch(
      setUpdateTrelloCard({
        cardName: meta.name,
        newStatus: selectedTitle,
        newCardName: value,
      })
    );
    closeModal();
  };

  const titles = data.map((item) => item.title);

  useEffect(() => {
    setValue(meta.name);
  }, [meta.name]);

  const handleRemoveCard = () => {
    dispatch(setRemoveTrelloCard({ cardId: meta.id, title: meta.title }));
    closeModal();
  };

  return (
    <div className="styled-updatedCard">
      <div className="styled-updatedCard-select-button">
        <SelectButton
          label={'Titles Selection'}
          data={titles}
          isActive={selectedTitle}
          setIsActive={setSelectedTitle}
        />
      </div>
      <div className="styled-updatedCard-selected-input">
        <Input
          label="Card Name"
          value={value}
          onChange={setValue}
          maxWidth
          backgroundColor="gray"
        />
      </div>
      <div className="styled-updatedCard-buttons">
        <Button label="Cancel" onClick={closeModal} />
        <Button
          label="Delete"
          onClick={handleRemoveCard}
          backgroundColour="red"
          colour="white"
        />
        <Button
          label="Update"
          onClick={handleUpdateCard}
          backgroundColour="blue"
          colour="white"
        />
      </div>
    </div>
  );
};

export default UpdateCard;
