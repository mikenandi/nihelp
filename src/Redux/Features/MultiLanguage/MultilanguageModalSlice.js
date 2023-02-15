import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    multilanguageVisible: false,
};

const modalSlice = createSlice({
    name: "MULTILANGUAGE_MODAL_SLICE",
    initialState,
    reducers: {
        multilanguageVisibleReducer: (state, actions) => {
            state.multilanguageVisible = !state.multilanguageVisible;
        },
    },
});

export const { multilanguageVisibleReducer } = modalSlice.actions;

export default modalSlice.reducer;
