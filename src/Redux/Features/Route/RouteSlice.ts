import {createSlice} from "@reduxjs/toolkit";

interface RouteState {}

const initialState: RouteState = {};

const routeSlice = createSlice({
	name: "ROUTE_SLICE",
	initialState,
	reducers: {},
});

export const {} = routeSlice.actions;

export default routeSlice.reducer;
