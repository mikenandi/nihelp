import { createSlice } from "@reduxjs/toolkit";
import {
    formatPhoneNumber,
    removeNonNumber,
} from "../../../Helpers/StringFormater";

const initialState = {
    name: "Landlord Name",
    gender: "",
    birthdate: "",
    email: "landlord@email.com",
    countryCode: "+255",
    phone: "",
    password: "*********",
    imgUrl: "",
};

const detailsSlice = createSlice({
    name: "PROFILE_DETAILS_SLICE",
    initialState,
    reducers: {
        editNameReducer: (state, actions) => {
            state.name = actions.payload;
        },
        maleGenderReducer: (state, actions) => {
            state.gender = "male";
        },
        femaleGenderReducer: (state, actions) => {
            state.gender = "female";
        },
        editYearReducer: (state, actions) => {},
        editEmailReducer: (state, actions) => {
            state.email = actions.payload;
        },
        editPhoneNumberReducer: (state, actions) => {
            state.phone = formatPhoneNumber(removeNonNumber(actions.payload));
        },
        saveProfileDataReducer: (state, actions) => {
            state.name = actions.payload.name;
            state.gender = actions.payload.gender;
            state.phone = actions.payload.phoneNumber;
            state.imgUrl = actions.payload.profileImg;
            state.email = actions.payload.email;
            state.birthdate = actions.payload.birthdate;
        },
        saveBirthdateReducer: (state, actions) => {
            state.birthdate = actions.payload;
        },
    },
});

export const {
    editNameReducer,
    maleGenderReducer,
    femaleGenderReducer,
    editEmailReducer,
    editPhoneNumberReducer,
    saveProfileDataReducer,
    saveBirthdateReducer,
} = detailsSlice.actions;

export default detailsSlice.reducer;
