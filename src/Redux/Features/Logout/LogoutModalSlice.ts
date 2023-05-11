import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logoutVisible: false,
};

const modalSlice = createSlice({
    name: "LOGOUT_MODAL_SLICE",
    initialState,
    reducers: {
        logoutVisibleReducer: (state, actions) => {
            state.logoutVisible = !state.logoutVisible;
        },
    },
});

export const { logoutVisibleReducer } = modalSlice.actions;

export default modalSlice.reducer;
