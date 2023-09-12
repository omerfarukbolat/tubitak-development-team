import { useState } from 'react';
import { ModalProps } from '../..';
import Button from '../../../components/button';
import Input from '../../../components/input';
import './addTitle.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { setAddTrelloTitle } from '../../../store/reducers/trelloReducer';

const AddTitle: React.FC<ModalProps> = ({ closeModal }) => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();

  const handleAddTitle = () => {
    dispatch(setAddTrelloTitle(value));
    closeModal();
  };

  return (
    <div className="styled-add-title">
      <div className="styled-add-title-input">
        <Input value={value} onChange={setValue} maxWidth />
      </div>
      <div className="styled-add-title-buttons">
        <Button label="Cancel" onClick={closeModal} />
        <Button label="Add" onClick={handleAddTitle} />
      </div>
    </div>
  );
};

export default AddTitle;
