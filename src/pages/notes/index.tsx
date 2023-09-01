import React, { useState } from 'react';
import AddNote, { NoteItemProps } from '../../components/addNote';
import Container from '../../components/container';
import './notes.css';
import Note from '../../components/note';
import '../../components/note/note.css';

const dummyNote: NoteItemProps[] = [
  {
    id: 1,
    title: 'Note Example 1',
    description: 'That is a note example description',
    date: new Date('2023-07-21'),
  },

  {
    id: 2,
    title: 'Note Example 2',
    description: 'That is a description for note example 2',
    date: new Date('2023-07-20'),
  },
];

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<NoteItemProps[]>(dummyNote);

  const handleAddNote = (newNote: NoteItemProps) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...newNote, id: new Date().getTime() },
    ]);
    console.log(newNote);
  };

  const handleEditNote = (id: number, updatedData: Partial<NoteItemProps>) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, ...updatedData } : note
      )
    );
  };

  const handleDeleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <Container>
      <h1>Notes App</h1>
      <AddNote onAddNote={handleAddNote} />

      <div className="styled-note-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            data={note}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </Container>
  );
};

export default Notes;
