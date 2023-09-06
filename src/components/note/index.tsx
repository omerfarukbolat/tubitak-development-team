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

    console.log(title, description);
  };

  const handleCancelEditClick = () => {
    setIsEditMode(false);
    setTitle(title);
    setDescription(description);
  };

  const handleDeleteNoteClick = () => {
    onDeleteNote(id);

    console.log('Delete note with id:', id);
  };

  return (
    <div className="styled-note">
      <div className="styled-note-content">
        <div className="styled-note-title">
          {isEditMode ? (
            <>
              <Input
                value={title}
                onChange={(e) => setTitle(e)}
                label="Title"
                maxWidth
              />

              <div>
                <button
                  className="styled-close-button"
                  onClick={handleCancelEditClick}
                >
                  X
                </button>
              </div>
            </>
          ) : (
            title
          )}
        </div>
        <div className="styled-note-description">
          {isEditMode ? (
            <TextArea
              value={description}
              onChange={(e) => setDescription(e)}
              label="Description"
              maxWidth
            />
          ) : (
            description
          )}
        </div>

        {/* <hr className="hr" /> */}

        <div className="styled-note-dropdown">
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
        <div className="styled-note-date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default Note;
