import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isLogedOut: true,
	fromForgotPassword: false,
	authToken: "",
	userId: "",
	owner: "",
	brand: "",
	model: "",
	driverName: "",
	phoneNumber: "",
	plateNumber: "",
	password: "",
	profileData: {},
};

const authSlice = createSlice({
	name: "AUTH",
	initialState,
	reducers: {
		logInReducer: (state, actions) => {
			// state.isLogedOut = false;
			state.authToken = actions.payload.authToken;
			state.userId = actions.payload.userId;
		},
		signUpReducer: (state, actions) => {
			// state.isLogedOut = false;
			state.authToken = actions.payload.authToken;
			state.userId = actions.payload.userId;
		},
		signinReducer: (state, actions) => {
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
		ownerReducer: (state, actions) => {
			state.owner = actions.payload;
		},
		brandReducer: (state, actions) => {
			state.brand = actions.payload;
		},
		passwordReducer: (state, actions) => {
			state.password = actions.payload;
		},
		plateNumberReducer: (state, actions) => {
			state.plateNumber = actions.payload;
		},
		driverReducer: (state, actions) => {
			state.driverName = actions.payload;
		},
		phoneNumberReducer: (state, actions) => {
			state.phoneNumber = actions.payload;
		},
		modelReducer: (state, actions) => {
			state.model = actions.payload;
		},
		saveDataFromSignUp: (state, actions) => {
			state.authToken = actions.payload.auth_token;
			state.userId = actions.payload.user_id;
		},
		profileDataReducer: (state, actions) => {
			state.owner = actions.payload.owner;
			state.model = actions.payload.vehicle_model;
			state.brand = actions.payload.vehicle_brand;
			state.phoneNumber = actions.payload.driver_phone;
			state.plateNumber = actions.payload.plate_number;
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
	ownerReducer,
	brandReducer,
	modelReducer,
	passwordReducer,
	plateNumberReducer,
	driverReducer,
	signinReducer,
	phoneNumberReducer,
	profileDataReducer,
} = authSlice.actions;

export default authSlice.reducer;
