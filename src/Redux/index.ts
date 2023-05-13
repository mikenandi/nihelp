import {configureStore} from "@reduxjs/toolkit";
import ImageSliceReducer from "./Features/ImageLibrary/ImageSlice";
import AuthSliceReducer from "./Features/Auth/AuthSlice";
import ErrorMsgSliceReducer from "./Components/ErrorMsgSlice";
import InputCodeSliceReducer from "./Components/InputCode";
import LocationSliceReducer from "./Features/Location/locationSlice";
import LocationModalSliceReducer from "./Features/Location/locationModalSlice";
import CodeInputSlice from "./Components/CodeInputSlice";
import AccountModalSlice from "./Features/Account/AccountModalSlice";
import HelpModalSlice from "./Features/Help/HelpModalSlice";
import EditProfileModalSlice from "./Features/Account/EditProfileModalSlice";
import ProfileDetailSlice from "./Features/Account/ProfileDetailSlice";
import MultilanguageModalSlice from "./Features/MultiLanguage/MultilanguageModalSlice";
import MultilanguageSlice from "./Features/MultiLanguage/MultilanguageSlice";
import LogoutModalSlice from "./Features/Logout/LogoutModalSlice";
import HelpTypeSlice from "./Features/ReportBreakdown/ReportBreakdownSlice";
import VehicleModalSlice from "./Features/Vehicle/VehicleModalSlice";
import ReportBreakdownSlice from "./Features/ReportBreakdown/ReportBreakdownSlice";

export const store = configureStore({
	reducer: {
		auth: AuthSliceReducer,
		imageLibrary: ImageSliceReducer,
		errorMsg: ErrorMsgSliceReducer,
		inputCode: InputCodeSliceReducer,
		location: LocationSliceReducer,
		locationModal: LocationModalSliceReducer,
		codeInput: CodeInputSlice,
		reportBreakdown: ReportBreakdownSlice,
		accountModal: AccountModalSlice,
		helpModal: HelpModalSlice,
		editProfileModal: EditProfileModalSlice,
		profileDetail: ProfileDetailSlice,
		multilanguageModal: MultilanguageModalSlice,
		multilanguage: MultilanguageSlice,
		logout: LogoutModalSlice,
		helpType: HelpTypeSlice,
		vehicleModal: VehicleModalSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
