import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataProps {
    id: number;
    label: string;
    isCompleted: boolean;
}

interface TodoState {
    data: DataProps[];
}

const initialState: TodoState = {
    data: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoFetch: (state, action: PayloadAction<DataProps[]>) => {
            state.data = action.payload;
        },
    },
});

export const { todoFetch } = todoSlice.actions;

export default todoSlice.reducer;