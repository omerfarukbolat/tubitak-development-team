import { useState } from 'react';
import { ModalProps } from '..';
import Input from '../../components/input';
import TextArea from '../../components/textArea';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setUpdateNote } from '../../store/reducers/noteReducer';
import Button from '../../components/button';

const UpdateNoteItem: React.FC<ModalProps> = ({ meta, closeModal }) => {
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState(meta.description);
  const [title, setTitle] = useState(meta.title);

  const handleUpdateNote = () => {
    dispatch(
      setUpdateNote({ id: meta.id, title: title, description: description,date: meta.date })
    );
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div>
      <Input
        label="Title"
        value={title}
        maxWidth
        onChange={(e) => {
          setTitle(e);
        }}
        backgroundColor="gray"
      />
      <TextArea
        label="Description"
        value={description}
        maxWidth
        onChange={(e) => {
          setDescription(e);
        }}
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
        <Button onClick={handleUpdateNote} label= 'Save' colour='blue'/>
        <Button onClick={handleCancel} label='Cancel' colour='blue'/>
      </div>
    </div>
  );
};

export default UpdateNoteItem;
