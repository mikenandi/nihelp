import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDriver {
  name: string;
  email: string;
  plateNumber: string;
  licenseNo: string;
  phoneNumber: string;
  isOwner: boolean;
}

export interface IOwner {
  name: string;
  email: string;
  phoneNumber: string;
  vehicles: number;
  isOwner: boolean;
}

interface AuthState {
  isLogedOut: boolean;
  authToken: string;
  name: string;
  email: string;
  password: string;
  plateNumber: string;
  userType: string;
  licenseNo: string;
  phoneNumber: string;
  vehicles: number;
  isOwner: boolean;
  isConnected: boolean;
}

const initialState: AuthState = {
  isLogedOut: true,
  authToken: "",
  name: "",
  email: "",
  password: "",
  plateNumber: "",
  userType: "",
  licenseNo: "",
  phoneNumber: "",
  vehicles: 0,
  isOwner: false,
  isConnected: false,
};

const authSlice = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    logInReducer: (
      state,
      actions: PayloadAction<{ authToken: string }>
    ) => {
      state.authToken = actions.payload.authToken;
      state.isLogedOut = false;
    },
    logOutReducer: (state) => {
      state.authToken = "";
      state.isLogedOut = true;
    },

    nameReducer: (state, actions: PayloadAction<string>) => {
      state.name = actions.payload;
    },
    emailReducer: (state, actions: PayloadAction<string>) => {
      state.email = actions.payload;
    },
    passwordReducer: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },
    platenumberReducer: (state, actions: PayloadAction<string>) => {
      state.plateNumber = actions.payload;
    },
    userTypeReducer: (state, actions: PayloadAction<string>) => {
      state.userType = actions.payload;
    },
    licenseNoReducer: (state, actions: PayloadAction<string>) => {
      state.licenseNo = actions.payload;
    },
    phoneNumberReducer: (state, actions) => {
      state.phoneNumber = actions.payload;
    },
    driverProfileReducer: (state, actions: PayloadAction<IDriver>) => {
      state.name = actions.payload.name;
      state.email = actions.payload.email;
      state.plateNumber = actions.payload.plateNumber;
      state.licenseNo = actions.payload.licenseNo;
      state.phoneNumber = actions.payload.phoneNumber;
      state.isOwner = actions.payload.isOwner;
    },
    ownerProfileReducer: (state, actions: PayloadAction<IOwner>) => {
      state.name = actions.payload.name;
      state.email = actions.payload.email;
      state.phoneNumber = actions.payload.phoneNumber;
      state.isOwner = actions.payload.isOwner;
      state.vehicles = actions.payload.vehicles;
    },
    isConnectedReducer: (state) => {
      state.isConnected = !state.isConnected;
    },
    cleanAuthDataReducer: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  logInReducer,
  logOutReducer,
  nameReducer,
  emailReducer,
  passwordReducer,
  platenumberReducer,
  userTypeReducer,
  licenseNoReducer,
  phoneNumberReducer,
  ownerProfileReducer,
  driverProfileReducer,
  isConnectedReducer,
  cleanAuthDataReducer,
} = authSlice.actions;

export default authSlice.reducer;
