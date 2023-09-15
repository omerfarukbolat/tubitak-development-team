import React from 'react';
import './addnote.css';

interface AddNoteButtonProps {
  onAddNote: () => void;
}

const AddNote: React.FC<AddNoteButtonProps> = ({ onAddNote }) => (
  <div className="styled-addNote">
    <button className="styled-addNote-addNew" onClick={onAddNote}>
      <span className="styled-addNote-addNew-icon" />
      <label className="styled-addNote-addNew-label">Add New Note</label>
    </button>
  </div>
);

export default AddNote;
