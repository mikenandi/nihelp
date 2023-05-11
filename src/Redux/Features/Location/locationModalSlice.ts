import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    confirmVisible: false,
};

const locationModalSlice = createSlice({
    name: "LOCATION_MODALS",
    initialState,
    reducers: {
        confirmLocationReducer: (state, actions) => {
            state.confirmVisible = !state.confirmVisible;
        },
    },
});

export const { confirmLocationReducer } = locationModalSlice.actions;

export default locationModalSlice.reducer;
