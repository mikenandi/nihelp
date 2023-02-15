import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editNameVisible: false,
    editGenderVisible: false,
    editBirthdateVisible: false,
    editEmailVisible: false,
    editPhoneVisible: false,
    editPasswordVisible: false,
};

const modalSlice = createSlice({
    name: "EDIT_PROFILE_MODAL_SLICE",
    initialState,
    reducers: {
        editNameVisibleReducer: (state, actions) => {
            state.editNameVisible = !state.editNameVisible;
        },
        editGenderVisibleReducer: (state, actions) => {
            state.editGenderVisible = !state.editGenderVisible;
        },
        editBirthdateVisibleReducer: (state, actions) => {
            state.editBirthdateVisible = !state.editBirthdateVisible;
        },
        editEmailVisibleReducer: (state, actions) => {
            state.editEmailVisible = !state.editEmailVisible;
        },
        editPhoneVisibleReducer: (state, actions) => {
            state.editPhoneVisible = !state.editPhoneVisible;
        },
        editPasswordVisibleReducer: (state, actions) => {
            state.editPasswordVisible = !state.editPasswordVisible;
        },
    },
});

export const {
    editBirthdateVisibleReducer,
    editEmailVisibleReducer,
    editGenderVisibleReducer,
    editNameVisibleReducer,
    editPasswordVisibleReducer,
    editPhoneVisibleReducer,
} = modalSlice.actions;

export default modalSlice.reducer;
