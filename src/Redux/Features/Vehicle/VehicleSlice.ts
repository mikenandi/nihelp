import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface VehicleState {
	make: string;
	model: string;
	modelYear: string;
	bodyType: string;
	fuelType: string;
	chassisNumber: string;
	plateNumber: string;
}

const initialState: VehicleState = {
	make: "",
	model: "",
	modelYear: "",
	bodyType: "",
	fuelType: "",
	chassisNumber: "",
	plateNumber: "",
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
} = VehicleSlice.actions;

export default VehicleSlice.reducer;
