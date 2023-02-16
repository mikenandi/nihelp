import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isLogedOut: true,
	fromForgotPassword: false,
	authToken: "",
	userId: "",
	company: "",
	driver: "",
	plateNumber: "",
	carType: "",
	password: "",
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
		companyReducer: (state, actions) => {
			state.company = actions.payload;
		},
		passwordReducer: (state, actions) => {
			state.password = actions.payload;
		},
		plateNumberReducer: (state, actions) => {
			state.plateNumber = actions.payload;
		},
		driverReducer: (state, actions) => {
			state.plateNumber = actions.payload;
		},
		carTypeReducer: (state, actions) => {
			state.driver = actions.payload;
		},
		saveDataFromSignUp: (state, actions) => {
			state.authToken = actions.payload.auth_token;
			state.userId = actions.payload.user_id;
		},
	},
});

export const {
	logInReducer,
	logOutReducer,
	setConfirmEmailFromForgotePassword,
	resetConfirmEmailFrom,
	saveDataFromSignUp,
	signUpReducer,
	companyReducer,
	carTypeReducer,
	passwordReducer,
	plateNumberReducer,
	driverReducer,
} = authSlice.actions;

export default authSlice.reducer;
