import React, { useState } from 'react';
import './note.css';
import Dropdown from '../dropdown';
import Input from '../input';
import TextArea from '../textArea';

interface NoteProps {
  data: {
    id: number;
    title: string;
    description: string;
    date: Date;
  };
  onEditNote: (id: number, updatedData: Partial<NoteProps['data']>) => void;
  onDeleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ data, onEditNote, onDeleteNote }) => {
  const {
    id,
    title: initialTitle,
    description: initialDescription,
    date,
  } = data; // 'title', 'description' and 'date' are our datas.

  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const formattedDate = new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));

  const handleEditNoteClick = () => {
    if (isEditMode) {
      onEditNote(id, { title, description });
    }
    setIsEditMode(!isEditMode);
  };

  const handleCancelEditClick = () => {
    setIsEditMode(false);
    setTitle(title);
    setDescription(description);
  };

  const handleDeleteNoteClick = () => {
    onDeleteNote(id);
  };

  return (
    <div className="styled-note">
      <div className="styled-note-top">
        {isEditMode ? (
          <>
            <button
              className="styled-note-top-close-button"
              onClick={handleCancelEditClick}
            >
              X
            </button>
            <div className="styled-note-top-between">
              <Input
                value={title}
                onChange={(e) => setTitle(e)}
                label="Title"
                maxWidth
              />
              <TextArea
                value={description}
                onChange={(e) => setDescription(e)}
                label="Description"
                maxWidth
              />
            </div>
          </>
        ) : (
          <>
            <div className="styled-note-top-title">{title}</div>
            <div className="styled-note-top-description">{description}</div>
          </>
        )}
      </div>

      <div className="styled-note-bottom">
        <div className="styled-note-bottom-date">{formattedDate}</div>
        <Dropdown
          data={[
            {
              name: isEditMode ? 'Save' : 'Edit',
              click: handleEditNoteClick,
            },
            { name: 'Delete', click: handleDeleteNoteClick },
          ]}
        />
      </div>
    </div>
  );
};

export default Note;
