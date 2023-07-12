import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

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
    inputVehicleReducer: (
      state,
      actions: PayloadAction<{
        name: string;
        value: string;
      }>
    ) => {
      const { name, value } = actions.payload;

      (state as Record<string, any>)[name] = value;
    },
    saveVehicleReducer: (
      state,
      actions: PayloadAction<VehicleState>
    ) => {
      Object.assign(state, actions.payload);
    },
    clearVehicleReducer: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  inputVehicleReducer,
  clearVehicleReducer,
  saveVehicleReducer,
} = VehicleSlice.actions;

export default VehicleSlice.reducer;
