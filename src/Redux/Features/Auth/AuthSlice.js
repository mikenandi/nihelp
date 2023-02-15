import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogedOut: true,
    fromForgotPassword: false,
    authToken: "",
    userId: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    authToken: "",
};

const authSlice = createSlice({
    name: "AUTH",
    initialState,
    reducers: {
        logInReducer: (state, actions) => {
            state.isLogedOut = false;
            state.authToken = actions.payload.authToken;
            state.userId = actions.payload.userId;
        },
        signUpReducer: (state, actions) => {
            state.isLogedOut = false;
        },
        logOutReducer: (state, actions) => {
            state.authToken = "";
            state.userId = "";
            state.isLogedOut = true;
        },
        setConfirmEmailFromForgotePassword: (state, actions) => {
            state.fromForgotPassword = true;
        },
        resetConfirmEmailFrom: (state, actions) => {
            state.fromForgotPassword = false;
        },
        saveEmail: (state, actions) => {
            state.email = actions.payload;
        },
        savePassword: (state, actions) => {
            state.password = actions.payload;
        },
        saveDataFromSignUp: (state, actions) => {
            state.authToken = actions.payload.auth_token;
            state.userId = actions.payload.user_id;
        },
        saveConfirmPassword: (state, actions) => {
            state.confirmPassword = actions.payload;
        },
        saveFullnameReducer: (state, actions) => {
            state.fullname = actions.payload;
        },
    },
});

export const {
    logInReducer,
    logOutReducer,
    setConfirmEmailFromForgotePassword,
    resetConfirmEmailFrom,
    saveEmail,
    savePassword,
    saveDataFromSignUp,
    signUpReducer,
    saveConfirmPassword,
    saveFullnameReducer,
} = authSlice.actions;

export default authSlice.reducer;
