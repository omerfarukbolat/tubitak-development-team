//pages/notes/index.tsx
import React, { useEffect } from 'react';
import AddNote from '../../components/addNote';
import Container from '../../components/container';
import './notes.css';
import Note, { NoteDataProps } from '../../components/note';
import '../../components/note/note.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { noteFetch } from '../../store/reducers/noteReducer';
import dummyNote from '../../json/dummyNote.json';

import { setRemoveNote } from '../../store/reducers/noteReducer';
import { openModal } from '../../store/reducers/modalReducer';

const Notes: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.note.data);

  useEffect(() => {
    dispatch(noteFetch(dummyNote));
  }, [dispatch]);

  const handleUpdateNote = (item: NoteDataProps) => {
    dispatch(
      openModal({
        component: 'update-note-item',
        title: 'Update Item',
        meta: {
          id: item.id,
          title: item.title,
          description: item.description,
          date: item.date,
        },
      })
    );
  };

  const handleDeleteNote = (id: number) => {
    dispatch(setRemoveNote(id));
  };

  return (
    <Container>
      <div className="styled-note-list">
        <AddNote
          onAddNote={() =>
            dispatch(
              openModal({
                component: 'add-new-create',
                title: 'New Note',
              })
            )
          }
        />
        {data.map((note) => (
          <Note
            key={note.id}
            data={note}
            onEditNote={handleUpdateNote}
            onDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </Container>
  );
};

export default Notes;
