import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	coordinates: {
		latitude: -6.772100165646068,
		longitude: 39.22063551843166,
	},
	address: {
		region: "",
		city: "",
		district: "",
		country: "",
		countryCode: "",
		houseNumber: "",
		postCode: "",
// @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
		region: "",
		road: "",
		street: "",
		ward: "",
		popularName: "",
	},
	starting: "",
	destination: "",
	confirmed: false,
};

const locationSlice = createSlice({
	name: "LOCATION",
	initialState,
	reducers: {
		currentCoordinatesReducer: (state, actions) => {
			state.coordinates.longitude = actions.payload.longitude;
			state.coordinates.latitude = actions.payload.latitude;
		},
		locationDataReducer: (state, actions) => {
			state.address.region = actions.payload.region;
			state.address.city = actions.payload.city;
			state.address.district = actions.payload.city_district;
			state.address.country = actions.payload.country;
			state.address.countryCode = actions.payload.country_code;
			state.address.houseNumber = actions.payload.house_number;
			state.address.postCode = actions.payload.postcode;
			state.address.road = actions.payload.road;
			state.address.street = actions.payload.subward;
			state.address.ward = actions.payload.ward;
		},
		confirmStatusReducer: (state, actions) => {
			state.confirmed = !state.confirmed;
		},
		clearLocationDataReducer: (state, actions) => {
			Object.assign(state, initialState);
		},
		startingReducer: (state, actions) => {
			state.starting = actions.payload;
		},
		destinationReducer: (state, actions) => {
			state.destination = actions.payload;
		},
	},
});

export const {
	currentCoordinatesReducer,
	locationDataReducer,
	confirmStatusReducer,
	clearLocationDataReducer,
	destinationReducer,
	startingReducer,
} = locationSlice.actions;

export default locationSlice.reducer;
