import data from '../../api/dummy_todo.json';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialActiveTab = data.tabData[0].label.toString().toLowerCase(); 
console.log(initialActiveTab);

interface DataProps {
    id: number;
    label: string;
    isCompleted: boolean;
}

interface TodoState {
    data: DataProps[];
    activeTab: string;
    editedTask: string;
    editingTaskId: number | null;
}

const initialState: TodoState = {
    data: [],
    activeTab: initialActiveTab,
    editedTask: "",
    editingTaskId: null,

};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoFetch: (state, action: PayloadAction<DataProps[]>) => {
            state.data = action.payload;
        },
        setAddTodo: (state, action: PayloadAction<DataProps>) => {
            state.data.push(action.payload);
        },
        setRemoveTodo: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        setUpdateTodo: (state, action: PayloadAction<DataProps>) => {
            const updatedIndex = state.data.findIndex(item => item.id === action.payload.id);
            if (updatedIndex !== -1) {
                state.data[updatedIndex] = action.payload;
            }
        },
        setRemoveAllTodo: (state) => {
            state.data = state.data.filter((item) => !item.isCompleted);
        },
        setToggleCompleteTodo: (state, action: PayloadAction<number>) => {
            const toggledIndex = state.data.findIndex(item => item.id === action.payload);
            if (toggledIndex !== -1) {
                state.data[toggledIndex].isCompleted = !state.data[toggledIndex].isCompleted;
            }
        },
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload;
          },
    },
});

export const { todoFetch, setAddTodo, setRemoveTodo, setUpdateTodo, setRemoveAllTodo, setToggleCompleteTodo, setActiveTab } = todoSlice.actions;

export default todoSlice.reducer;