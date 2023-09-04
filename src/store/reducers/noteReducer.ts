import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataProps {
    id: number;
    title: string;
    description: string;
    date: Date;
}

interface NoteState {
    data: DataProps[];
}

const initialState: NoteState = {
    data: [],
};

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        noteFetch: (state, action: PayloadAction<DataProps[]>) => {
            state.data = action.payload;
        },
    },
});

export const { noteFetch } = noteSlice.actions;

export default noteSlice.reducer;