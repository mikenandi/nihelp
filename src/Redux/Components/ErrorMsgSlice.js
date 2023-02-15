import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    info: "",
};

const errorMsgSlice = createSlice({
    name: "ERROR_MSG",
    initialState,
    reducers: {
        errorMsg: (state, actions) => {
            state.error = actions.payload;
        },
        deleteErrorMsg: (state, actions) => {
            state.error = "";
        },
        infoMsg: (state, actions) => {
            state.info = actions.payload;
        },
    },
});

export const { errorMsg, deleteErrorMsg, infoMsg } = errorMsgSlice.actions;

export default errorMsgSlice.reducer;
