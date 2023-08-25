import React, { useState } from 'react';
import './addnote.css';
import Input from '../input';
import TextArea from '../textArea';
import Button from '../button';
export interface NoteItemProps {
  id: string;
  title: string;
  description: string;
  date: Date;
}

interface AddNoteButtonProps {
  onAddNote: (note: NoteItemProps) => void;
}

const AddNote: React.FC<AddNoteButtonProps> = ({ onAddNote }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (title && description) {
      const newNote: NoteItemProps = {
        id: String(Date.now()),
        title: title,
        description: description,
        date: new Date(),
      };

      onAddNote(newNote);
      setTitle('');
      setDescription('');
      setShowForm(false);
    }
  };

  return (
    <div className="styled-addNote-container">
      {showForm ? (
        <div className="styled-addNote">
          <Input label="Title" value={title} onChange={setTitle} />

          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
          />

          <div className="styled-addNote-buttons">
            <Button onClick={handleAddNote} label='Add Note'/>
            <Button onClick={() => setShowForm(false)} label='Cancel'/>
          </div>
        </div>
      ) : (
        <div className="styled-addNotes">
          <button className="addNew" onClick={() => setShowForm(true)}>
            <span className="styled-addNotes-icon" />
            <label className="styled-addNotes-label">Add New Note</label>
          </button>
        </div>
      )}
    </div>
  );
};

export default AddNote;
