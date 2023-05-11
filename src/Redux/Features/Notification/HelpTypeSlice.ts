import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	jack: false,
	tyre: false,
	toolbox: false,
	battery: false,
	mechanic: false,
};

const helpTypeSlice = createSlice({
	name: "HELP_TYPE_SLICE",
	initialState,
	reducers: {
		jackReducer: (state, actions) => {
			state.jack = !state.jack;
		},
		tyreReducer: (state, actions) => {
			state.tyre = !state.tyre;
		},
		toolboxReducer: (state, actions) => {
			state.toolbox = !state.toolbox;
		},
		batteryReducer: (state, actions) => {
			state.battery = !state.battery;
		},
		mechanicReducer: (state, actions) => {
			state.mechanic = !state.mechanic;
		},
		resetHelpReducer: (state, actions) => {
			Object.assign(state, initialState);
		},
	},
});

export const {
	jackReducer,
	mechanicReducer,
	toolboxReducer,
	batteryReducer,
	tyreReducer,
	resetHelpReducer,
} = helpTypeSlice.actions;

export default helpTypeSlice.reducer;
