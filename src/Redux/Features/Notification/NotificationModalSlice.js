import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notificationVisible: false,
};

const modalSlice = createSlice({
    name: "NOTIFICATION_MODALS",
    initialState,
    reducers: {
        notificationVisibleReducer: (state, actions) => {
            state.notificationVisible = !state.notificationVisible;
        },
    },
});

export const { notificationVisibleReducer } = modalSlice.actions;

export default modalSlice.reducer;
