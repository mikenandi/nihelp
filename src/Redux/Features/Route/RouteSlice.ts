import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RouteState {
  start: string;
  destination: string;
  viaRoad: string;
}

const initialState: RouteState = {
  start: "",
  destination: "",
  viaRoad: "",
};

const routeSlice = createSlice({
  name: "ROUTE_SLICE",
  initialState,
  reducers: {
    startReducer: (state, actions: PayloadAction<string>) => {
      state.start = actions.payload;
    },
    destinationReducer: (state, actions: PayloadAction<string>) => {
      state.destination = actions.payload;
    },
    viaRoadReducer: (state, actions: PayloadAction<string>) => {
      state.viaRoad = actions.payload;
    },
  },
});

export const { startReducer, destinationReducer, viaRoadReducer } =
  routeSlice.actions;

export default routeSlice.reducer;
