import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface IDriver {
	name: string;
	email: string;
	plateNumber: string;
	licenseNo: string;
	phoneNumber: string;
	isOwner: boolean;
}

export interface IOwner {
	name: string;
	email: string;
	phoneNumber: string;
	vehicles: number;
	activeRoutes: number;
	reportedBreakdowns: number;
	isOwner: boolean;
}

interface AuthState {
	isLogedOut: boolean;
	authToken: string;
	name: string;
	email: string;
	password: string;
	plateNumber: string;
	userType: string;
	licenseNo: string;
	phoneNumber: string;
	vehicles: number;
	activeRoutes: number;
	reportedBreakdowns: number;
	isOwner: boolean;
}

const initialState: AuthState = {
	isLogedOut: true,
	authToken: "",
	name: "",
	email: "",
	password: "",
	plateNumber: "",
	userType: "",
	licenseNo: "",
	phoneNumber: "",
	vehicles: 0,
	activeRoutes: 0,
	reportedBreakdowns: 0,
	isOwner: false,
};

const authSlice = createSlice({
	name: "AUTH",
	initialState,
	reducers: {
		logInReducer: (state, actions: PayloadAction<{authToken: string}>) => {
			state.authToken = actions.payload.authToken;
			state.isLogedOut = false;
		},
		logOutReducer: (state) => {
			state.authToken = "";
			state.isLogedOut = true;
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
			state.plateNumber = actions.payload;
		},
		userTypeReducer: (state, actions: PayloadAction<string>) => {
			state.userType = actions.payload;
		},
		licenseNoReducer: (state, actions: PayloadAction<string>) => {
			state.licenseNo = actions.payload;
		},
		phoneNumberReducer: (state, actions) => {
			state.phoneNumber = actions.payload;
		},
		cleanSignupDataReducer: (state) => {
			state.authToken = "";
			state.name = "";
			state.email = "";
			state.password = "";
			state.plateNumber = "";
			state.userType = "";
			state.licenseNo = "";
			state.phoneNumber = "";
		},
		cleanSigninDataReducer: (state) => {
			state.email = "";
			state.password = "";
		},
		driverProfileReducer: (state, actions: PayloadAction<IDriver>) => {
			state.name = actions.payload.name;
			state.email = actions.payload.email;
			state.plateNumber = actions.payload.plateNumber;
			state.licenseNo = actions.payload.licenseNo;
			state.phoneNumber = actions.payload.phoneNumber;
			state.isOwner = actions.payload.isOwner;
		},
		ownerProfileReducer: (state, actions: PayloadAction<IOwner>) => {
			state.name = actions.payload.name;
			state.email = actions.payload.email;
			state.phoneNumber = actions.payload.phoneNumber;
			state.isOwner = actions.payload.isOwner;
			state.vehicles = actions.payload.vehicles;
			state.activeRoutes = actions.payload.activeRoutes;
			state.reportedBreakdowns = actions.payload.reportedBreakdowns;
		},
	},
});

export const {
	logInReducer,
	logOutReducer,
	nameReducer,
	emailReducer,
	passwordReducer,
	platenumberReducer,
	userTypeReducer,
	licenseNoReducer,
	phoneNumberReducer,
	cleanSignupDataReducer,
	cleanSigninDataReducer,
	ownerProfileReducer,
	driverProfileReducer,
} = authSlice.actions;

export default authSlice.reducer;
