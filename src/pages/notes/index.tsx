//pages/notes/index.tsx
import React, { useEffect } from 'react';
import AddNote from '../../components/addNote';
import Container from '../../components/container';
import './notes.css';
import Note from '../../components/note';
import '../../components/note/note.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { noteFetch } from '../../store/reducers/noteReducer';
import dummyNote from '../../json/dummyNote.json';

import {setRemoveNote} from '../../store/reducers/noteReducer'

const Notes: React.FC = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.note.data);

  useEffect(() => {
    dispatch(noteFetch(dummyNote));
  }, [dispatch]);

  

   const handleDeleteNote = (id: number) => {
    dispatch(setRemoveNote(id));
   };

   console.log(data);

  return (
    <Container>
      <div className="styled-note-list">
        <AddNote onAddNote={() => {}} />
        {data.map((note) => (
          <Note
            key={note.id}
            data={note}
            onDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </Container>
  );
};

export default Notes;
