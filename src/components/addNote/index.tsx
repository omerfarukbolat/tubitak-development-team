 import React from 'react';
import './addnote.css';
import { openModal } from '../../store/reducers/modalReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export interface NoteItemProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface AddNoteButtonProps {
  onAddNote: (note: NoteItemProps) => void;
}

const AddNote: React.FC<AddNoteButtonProps> = ({ onAddNote }) => {

  const dispatch = useAppDispatch();

  return (
    <div className="styled-addNote">

      <button
        className="styled-addNote-addNew"
        onClick={() =>
          dispatch(
            openModal({
              component: 'add-new-create',
              title: 'New Note',
            })
          )
        }

      >
        <span className="styled-addNote-addNew-icon" />
        <label className="styled-addNote-addNew-label">Add New Note</label>
      </button>
      {/* )}*/}
    </div>
  );
};

export default AddNote;
