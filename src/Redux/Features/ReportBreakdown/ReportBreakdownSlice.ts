import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILocation {
  latitude: number;
  longitude: number;
}

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
  location: ILocation;
  plateNumber: string;
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
  location: {
    latitude: -39.432,
    longitude: 0.0,
  },
  plateNumber: "",
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
    breakdownLocationReducer: (
      state,
      actions: PayloadAction<{
        latitude: number;
        longitude: number;
        plateNumber: string;
      }>
    ) => {
      state.location.latitude = actions.payload.latitude;
      state.location.longitude = actions.payload.longitude;
      state.plateNumber = actions.payload.plateNumber;
    },
    clearBreakdownReducer: (state) => {
      Object.assign(state, initialState);
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
  breakdownLocationReducer,
  clearBreakdownReducer,
} = helpTypeSlice.actions;

export default helpTypeSlice.reducer;
