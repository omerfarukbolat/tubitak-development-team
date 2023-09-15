import { useState } from 'react';
import { ModalProps } from '..';
import Input from '../../components/input';
import TextArea from '../../components/textArea';
import Button from '../../components/button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setAddNote } from '../../store/reducers/noteReducer';

export const AddNewCreate: React.FC<ModalProps> = ({ meta, closeModal }) => {
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const handleAddNote = () => {
    dispatch(
      setAddNote({
        id: new Date().getTime(),
        title: title,
        description: description,
        date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
      })
    );
    closeModal();
  };

  return (
    <div>
      <Input
        label="Title"
        value={title}
        maxWidth
        onChange={setTitle}
        backgroundColor="gray"
      />
      <TextArea
        label="Description"
        value={description}
        maxWidth
        onChange={setDescription}
        backgroundColor="gray"
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '5px',
          marginTop: 10,
        }}
      >
        <Button onClick={handleAddNote} label="Add Note" colour="blue" />
        <Button onClick={closeModal} label="Cancel" colour="blue" />
      </div>
    </div>
  );
};

export default AddNewCreate;