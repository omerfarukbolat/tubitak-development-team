import React from 'react';
import './note.css';
import Dropdown from '../dropdown';

import { useDispatch } from 'react-redux';
import { openModal } from '../../store/reducers/modalReducer';

export interface NoteProps {
  data: {
    id: number;
    title: string;
    description: string;
    date: string;
  };
  onDeleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ data, onDeleteNote }) => {
  const { id, title, description, date } = data; // 'title', 'description' and 'date' are our datas.

  const dispatch = useDispatch();

  const handleDeleteNoteClick = () => {
    onDeleteNote(id);
  };

  return (
    <div className="styled-note">
      <div className="styled-note-top">
        <div className="styled-note-top-title">{title}</div>
        <div className="styled-note-top-description">{description}</div>
      </div>

      <div className="styled-note-bottom">
        <div className="styled-note-bottom-date">{date}</div>
        <Dropdown
          data={[
            {
              name: 'Edit',
              click: () => {
                dispatch(
                  openModal({
                    component: 'update-note-item',
                    title: 'Update Item',
                    meta: {
                      id: id,
                      title: title,
                      description: description,
                      date: data.date,
                    },
                  })
                );
              },
            },
            { name: 'Delete', click: handleDeleteNoteClick },
          ]}
        />
      </div>
    </div>
  );
};

export default Note;
