import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accountVisible: false,
    avatarVisible: false,
    cropVisible: false,
};

const modalSlice = createSlice({
    name: "ACCOUNT_MODAL_SLICE",
    initialState,
    reducers: {
        accounntVisibleReducer: (state, actions) => {
            state.accountVisible = !state.accountVisible;
        },
        avatarVisibleReducer: (state, actions) => {
            state.avatarVisible = !state.avatarVisible;
        },
        cropVisibleReducer: (state, actions) => {
            state.cropVisible = !state.cropVisible;
        },
    },
});

export const {
    accounntVisibleReducer,
    avatarVisibleReducer,
    cropVisibleReducer,
} = modalSlice.actions;

export default modalSlice.reducer;
