import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
    component: string;
    lastComponent?: string;
    title?: string;
    meta?: any;
}

const initialState: ModalState = {
    component: "",
    lastComponent: "",
    title: "",
    meta: {}
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            state.component = action.payload.component;
            state.title = action.payload.title;
            state.meta = action.payload.meta ? action.payload.meta : {};
        },
        closeModal: (state) => {
            state.component = "";
            state.lastComponent = state.component;
            state.title = "";
            state.meta = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;