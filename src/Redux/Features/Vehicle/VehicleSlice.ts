import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface VehicleState {
	id?: number;
	make: string;
	model: string;
	modelYear: string;
	bodyType: string;
	fuelType: string;
	chassisNumber: string;
	plateNumber: string;
	createdAt: string;
	updatedAt: string;
	engineType: string;
}

const initialState: VehicleState = {
	id: 0,
	make: "",
	model: "",
	modelYear: "",
	bodyType: "",
	fuelType: "",
	chassisNumber: "",
	plateNumber: "",
	createdAt: "",
	updatedAt: "",
	engineType: "",
};

const VehicleSlice = createSlice({
	name: "VEHICLE_SLICE",
	initialState,
	reducers: {
		makeReducer: (state, actions: PayloadAction<string>) => {
			state.make = actions.payload;
		},
		modelReducer: (state, actions: PayloadAction<string>) => {
			state.model = actions.payload;
		},
		modelYearReducer: (state, actions: PayloadAction<string>) => {
			state.modelYear = actions.payload;
		},
		bodyTypeReducer: (state, actions: PayloadAction<string>) => {
			state.bodyType = actions.payload;
		},
		fuelTypeReducer: (state, actions: PayloadAction<string>) => {
			state.fuelType = actions.payload;
		},
		chassisNumberReducer: (state, actions: PayloadAction<string>) => {
			state.chassisNumber = actions.payload;
		},
		plateNumberReducer: (state, actions: PayloadAction<string>) => {
			state.plateNumber = actions.payload;
		},
		engineTypeReducer: (state, actions: PayloadAction<string>) => {
			state.engineType = actions.payload;
		},
		saveVehicleReducer: (state, actions: PayloadAction<VehicleState>) => {
			Object.assign(state, actions.payload);
		},
		clearVehicleReducer: (state) => {
			Object.assign(state, initialState);
		},
	},
});

export const {
	makeReducer,
	modelReducer,
	modelYearReducer,
	bodyTypeReducer,
	fuelTypeReducer,
	chassisNumberReducer,
	plateNumberReducer,
	clearVehicleReducer,
	saveVehicleReducer,
	engineTypeReducer,
} = VehicleSlice.actions;

export default VehicleSlice.reducer;
