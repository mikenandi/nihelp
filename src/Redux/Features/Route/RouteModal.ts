import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  createRouteVisible: boolean;
  viaRoadVisible: boolean;
}

const initialState: ModalState = {
  createRouteVisible: false,
  viaRoadVisible: false,
};

const ModalSlice = createSlice({
  name: "ROOT_MODAL",
  initialState,
  reducers: {
    createRouteVisibleReducer: (state) => {
      state.createRouteVisible = !state.createRouteVisible;
    },
    viaRoadVisibleReducer: (state) => {
      state.viaRoadVisible = !state.viaRoadVisible;
    },
  },
});

export const {
  createRouteVisibleReducer,
  viaRoadVisibleReducer,
} = ModalSlice.actions;

export default ModalSlice.reducer;
