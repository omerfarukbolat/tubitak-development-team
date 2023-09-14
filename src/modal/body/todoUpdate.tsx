import { useState } from 'react';
import { ModalProps } from '..';
import Input from '../../components/input';
import Button from '../../components/button';
import { useAppDispatch } from '../../hooks/useAppDispatch'; // Ekleyin
import { setUpdateTodo } from '../../store/reducers/todoReducer';

const TodoUpdate: React.FC<ModalProps> = ({ meta, closeModal }) => {
  const dispatch = useAppDispatch();
  const [label, setLabel] = useState(meta?.label || '');

  const handleInputChange = (newValue: string) => {
    setLabel(newValue);
  };

  const handleUpdateClick = () => {
    dispatch(
      setUpdateTodo({ id: meta.id, label, isCompleted: meta.isCompleted })
    );
    closeModal();
  };

  const handleCancelClick = () => {
    closeModal();
  };

  return (
    <div>
      <Input onChange={handleInputChange} value={label} maxWidth />
      <div className="styled-todo-update-button">
        <Button
          label="Cancel"
          onClick={handleCancelClick}
          colour="white"
          backgroundColour="blue"
        />
        <Button
          label="Update"
          onClick={handleUpdateClick}
          colour="white"
          backgroundColour="blue"
        />
      </div>
    </div>
  );
};

export default TodoUpdate;
