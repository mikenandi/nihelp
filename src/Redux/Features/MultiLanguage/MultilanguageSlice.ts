import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLanguage: "",
};

const multilanguage = createSlice({
    name: "MULTILANGUAGE_SLICE",
    initialState,
    reducers: {
        currentLanguageReducer: (state, actions) => {
            state.currentLanguage = actions.payload;
        },
    },
});

export const { currentLanguageReducer } = multilanguage.actions;

export default multilanguage.reducer;
