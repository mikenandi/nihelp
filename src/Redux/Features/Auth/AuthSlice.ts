import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface AuthState {
	isLogedOut: boolean;
	fromForgotPassword: boolean;
	authToken: string;
	userId: string;
	name: string;
	email: string;
	password: string;
	platenumber: string;
	userType: string;
	licenseNo: string;
}

const initialState: AuthState = {
	isLogedOut: true,
	fromForgotPassword: false,
	authToken: "",
	userId: "",
	name: "",
	email: "",
	password: "",
	platenumber: "",
	userType: "",
	licenseNo: "",
};

const authSlice = createSlice({
	name: "AUTH",
	initialState,
	reducers: {
		logInReducer: (
			state,
			actions: PayloadAction<{authToken: string; userId: string}>
		) => {
			// state.isLogedOut = false;
			state.authToken = actions.payload.authToken;
			state.userId = actions.payload.userId;
		},
		signUpReducer: (
			state,
			actions: PayloadAction<{authToken: string; userId: string}>
		) => {
			// state.isLogedOut = false;
			state.authToken = actions.payload.authToken;
			state.userId = actions.payload.userId;
		},
		signinReducer: (state) => {
			state.isLogedOut = false;
		},
		logOutReducer: (state) => {
			state.authToken = "";
			state.userId = "";
			state.isLogedOut = true;
		},
		setConfirmEmailFromForgotePassword: (state) => {
			state.fromForgotPassword = true;
		},
		resetConfirmEmailFrom: (state) => {
			state.fromForgotPassword = false;
		},

		saveDataFromSignUp: (
			state,
			actions: PayloadAction<{auth_token: string; user_id: string}>
		) => {
			state.authToken = actions.payload.auth_token;
			state.userId = actions.payload.user_id;
		},

		nameReducer: (state, actions: PayloadAction<string>) => {
			state.name = actions.payload;
		},
		emailReducer: (state, actions: PayloadAction<string>) => {
			state.email = actions.payload;
		},
		passwordReducer: (state, actions: PayloadAction<string>) => {
			state.password = actions.payload;
		},
		platenumberReducer: (state, actions: PayloadAction<string>) => {
			state.platenumber = actions.payload;
		},
		userTypeReducer: (state, actions: PayloadAction<string>) => {
			state.userType = actions.payload;
		},
		licenseNoReducer: (state, actions: PayloadAction<string>) => {
			state.licenseNo = actions.payload;
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
	nameReducer,
	emailReducer,
	passwordReducer,
	signinReducer,
	platenumberReducer,
	userTypeReducer,
	licenseNoReducer,
} = authSlice.actions;

export default authSlice.reducer;
