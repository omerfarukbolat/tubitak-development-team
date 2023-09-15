import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataProps {
    id: number;
    title: string;
    description: string;
    date: string;
}

interface NoteState {
    data: DataProps[];
    didFetched: boolean;
}

const initialState: NoteState = {
    data: [],
    didFetched: false,
};

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        noteFetch: (state, action: PayloadAction<DataProps[]>) => {
            state.data = action.payload;
            state.didFetched = true;
        },
        setAddNote: (state, action: PayloadAction<DataProps>) => {
            state.data = [...state.data, action.payload]; // add data'ya çevir.
        },
        setRemoveNote: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter((note) => note.id !== action.payload);
        },
        setUpdateNote: (state, action: PayloadAction<DataProps>) => {
            const existingNoteIndex = state.data.findIndex((note) => note.id === action.payload.id);
            if (existingNoteIndex !== -1) {
                state.data[existingNoteIndex] = action.payload;
            }
        }

    },
});

export const { noteFetch, setAddNote, setUpdateNote, setRemoveNote } = noteSlice.actions;

export default noteSlice.reducer;