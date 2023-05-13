import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
	registerVehicleVisible: boolean;
	vehicleDetailsVisible: boolean;
	breakdownVisible: boolean;
	breakdownReportVisible: boolean;
}

const initialState: ModalState = {
	registerVehicleVisible: false,
	vehicleDetailsVisible: false,
	breakdownVisible: false,
	breakdownReportVisible: false,
};

const modalSlice = createSlice({
	name: "REGISTER_VEHICLE_MODAL",
	initialState,
	reducers: {
		registerVehicleVisibleReducer: (state) => {
			state.registerVehicleVisible = !state.registerVehicleVisible;
		},
		vehicleDetailsVisibleReducer: (state) => {
			state.vehicleDetailsVisible = !state.vehicleDetailsVisible;
		},
		breakdownVisibleReducer: (state) => {
			state.breakdownVisible = !state.breakdownVisible;
		},
		breakdownReportVisibleReducer: (state) => {
			state.breakdownReportVisible = !state.breakdownReportVisible;
		},
	},
});

export const {
	registerVehicleVisibleReducer,
	vehicleDetailsVisibleReducer,
	breakdownVisibleReducer,
	breakdownReportVisibleReducer,
} = modalSlice.actions;

export default modalSlice.reducer;
