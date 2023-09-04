import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataProps {
    id: number;
    name: string;
    status: string;
}

interface TrelloState {
    data: DataProps[];
}

const initialState: TrelloState = {
    data: [],
};

const trelloSlice = createSlice({
    name: 'trello',
    initialState,
    reducers: {
        trelloFetch: (state, action: PayloadAction<DataProps[]>) => {
            state.data = action.payload;
        },
    },
});

export const { trelloFetch } = trelloSlice.actions;

export default trelloSlice.reducer;