import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    helpVisible: false,
    faqVisible: false,
    contactUsVisible: false,
    termsOfServiceVisible: false,
    privacyPolicyVisible: false,
};

const modalSlice = createSlice({
    name: "HELP_MODAL_SLICE",
    initialState,
    reducers: {
        helpVisibleReducer: (state, actions) => {
            state.helpVisible = !state.helpVisible;
        },
        faqVisibleReducer: (state, actions) => {
            state.faqVisible = !state.faqVisible;
        },
        contactUsVisibleReducer: (state, actions) => {
            state.contactUsVisible = !state.contactUsVisible;
        },
        termsOfServiceVisibleReducer: (state, actions) => {
            state.termsOfServiceVisible = !state.termsOfServiceVisible;
        },
        privacyPolicyVisibleReducer: (state, actions) => {
            state.privacyPolicyVisible = !state.privacyPolicyVisible;
        },
    },
});

export const {
    helpVisibleReducer,
    faqVisibleReducer,
    contactUsVisibleReducer,
    termsOfServiceVisibleReducer,
    privacyPolicyVisibleReducer,
} = modalSlice.actions;

export default modalSlice.reducer;
