import React from 'react';
import './note.css';
import Dropdown from '../dropdown';

export interface NoteDataProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface NoteProps {
  data: NoteDataProps;
  onEditNote: (item: NoteDataProps) => void;
  onDeleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ data, onEditNote, onDeleteNote }) => (
  <div className="styled-note">
    <div className="styled-note-top">
      <div className="styled-note-top-title">{data.title}</div>
      <div className="styled-note-top-description">{data.description}</div>
    </div>

    <div className="styled-note-bottom">
      <div className="styled-note-bottom-date">{data.date}</div>
      <Dropdown
        data={[
          {
            name: 'Edit',
            click: () => onEditNote(data),
          },
          { name: 'Delete', click: () => onDeleteNote(data.id) },
        ]}
      />
    </div>
  </div>
);

export default Note;
