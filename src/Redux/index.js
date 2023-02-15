import {configureStore} from "@reduxjs/toolkit";
import ImageSliceReducer from "./Features/ImageLibrary/ImageSlice";
import AuthSliceReducer from "./Features/Auth/AuthSlice";
import ErrorMsgSliceReducer from "./Components/ErrorMsgSlice";
import InputCodeSliceReducer from "./Components/InputCode";
import LocationSliceReducer from "./Features/Location/locationSlice";
import LocationModalSliceReducer from "./Features/Location/locationModalSlice";
import CodeInputSlice from "./Components/CodeInputSlice";
import NotificationModalSlice from "./Features/Notification/NotificationModalSlice";
import AccountModalSlice from "./Features/Account/AccountModalSlice";
import HelpModalSlice from "./Features/Help/HelpModalSlice";
import EditProfileModalSlice from "./Features/Account/EditProfileModalSlice";
import ProfileDetailSlice from "./Features/Account/ProfileDetailSlice";
import MultilanguageModalSlice from "./Features/MultiLanguage/MultilanguageModalSlice";
import MultilanguageSlice from "./Features/MultiLanguage/MultilanguageSlice";
import LogoutModalSlice from "./Features/Logout/LogoutModalSlice";

export const store = configureStore({
	reducer: {
		auth: AuthSliceReducer,
		imageLibrary: ImageSliceReducer,
		errorMsg: ErrorMsgSliceReducer,
		inputCode: InputCodeSliceReducer,
		location: LocationSliceReducer,
		locationModal: LocationModalSliceReducer,
		codeInput: CodeInputSlice,
		notificationModal: NotificationModalSlice,
		accountModal: AccountModalSlice,
		helpModal: HelpModalSlice,
		editProfileModal: EditProfileModalSlice,
		profileDetail: ProfileDetailSlice,
		multilanguageModal: MultilanguageModalSlice,
		multilanguage: MultilanguageSlice,
		logout: LogoutModalSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
