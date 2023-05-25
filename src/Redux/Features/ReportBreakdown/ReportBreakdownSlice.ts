import {createSlice} from "@reduxjs/toolkit";

interface BreakdownState {
	engineFailure: boolean;
	flatTyre: boolean;
	deadBattery: boolean;
	overHeating: boolean;
	fuelSystemIssue: boolean;
	transmissionIssue: boolean;
	brakingSystemMalfunction: boolean;
	electricalSystemFailure: boolean;
	alternatorFailure: boolean;
}

const initialState: BreakdownState = {
	engineFailure: false,
	flatTyre: false,
	deadBattery: false,
	overHeating: false,
	fuelSystemIssue: false,
	transmissionIssue: false,
	brakingSystemMalfunction: false,
	electricalSystemFailure: false,
	alternatorFailure: false,
};

const helpTypeSlice = createSlice({
	name: "BREAKDOWN_TYPE_SLICE",
	initialState,
	reducers: {
		engineFailureReducer: (state) => {
			state.engineFailure = !state.engineFailure;
		},
		flatTyreReducer: (state) => {
			state.flatTyre = !state.flatTyre;
		},
		deadBatteryReducer: (state) => {
			state.deadBattery = !state.deadBattery;
		},
		overHeatingReducer: (state) => {
			state.overHeating = !state.overHeating;
		},
		fuelSystemIssueReducer: (state) => {
			state.fuelSystemIssue = !state.fuelSystemIssue;
		},
		transmissionIssueReducer: (state) => {
			state.transmissionIssue = !state.transmissionIssue;
		},
		brakingSystemMalfunctionReducer: (state) => {
			state.brakingSystemMalfunction = !state.brakingSystemMalfunction;
		},
		electricalSystemFailureReducer: (state) => {
			state.electricalSystemFailure = !state.electricalSystemFailure;
		},
		alternatorFailureReducer: (state) => {
			state.alternatorFailure = !state.alternatorFailure;
		},
	},
});

export const {
	engineFailureReducer,
	flatTyreReducer,
	deadBatteryReducer,
	overHeatingReducer,
	fuelSystemIssueReducer,
	transmissionIssueReducer,
	brakingSystemMalfunctionReducer,
	electricalSystemFailureReducer,
	alternatorFailureReducer,
} = helpTypeSlice.actions;

export default helpTypeSlice.reducer;
