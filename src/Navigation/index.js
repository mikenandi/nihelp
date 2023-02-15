import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../Layouts/Screen";
import AppTabs from "./AppTabs";
import SignIn from "../Features/Auth/SignIn";
import SignUp from "../Features/Auth/SignUp";
import ForgotPassword from "../Features/Auth/ForgotPassword";
import ConfirmEmail from "../Features/Auth/ConfirmEmail";
import RecoverPassword from "../Features/Auth/RecoverPassword";
import Welcome from "../Features/Auth/Welcome";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Components/Loader";
import {logInReducer} from "../Redux/Features/Auth/AuthSlice";
import {useFonts} from "expo-font";
import {useTranslation} from "react-i18next";
import * as Notifications from "expo-notifications";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true,
	}),
});

function Auth() {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState(true);

	const [fontsLoaded] = useFonts({
		poppins: require("../../assets/fonts/barlow-condensed/BarlowCondensed-Medium.ttf"),
	});

	const isLogedOut = useSelector((state) => {
		return state.auth.isLogedOut;
	});

	// Notifications
	// React.useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			let token = await registerForPushNotificationsAsync();

	// 			return;
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	})();
	// }, []);

	// Check auth
	React.useEffect(() => {
		(async () => {
			try {
				let savedToken = await SecureStore.getItemAsync("authToken");

				let savedUserId = await AsyncStorage.getItem("userId");

				if (!!savedToken) {
					dispatch(
						logInReducer({
							authToken: savedToken,
							userId: savedUserId,
						}),
					);

					setIsLoading(false);

					return;
				}

				setIsLoading(false);

				return;
			} catch (error) {
				return;
			}
		})();

		return () => {
			// setIsLoading(false);
		};
	}, []);

	if (isLoading || !fontsLoaded) {
		return (
			<>
				<Loader />
			</>
		);
	}

	return (
		<Stack.Navigator initialRouteName='Welcome'>
			{isLogedOut ? (
				<>
					<Stack.Screen
						name='Welcome'
						component={Welcome}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='SignIn'
						component={SignIn}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='ForgotPassword'
						component={ForgotPassword}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='SignUp'
						component={SignUp}
						options={{headerShown: false}}
					/>
					<Stack.Screen
						name='ConfirmEmail'
						component={ConfirmEmail}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='VeficationCode'
						component={Screen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='RecoverPassword'
						component={RecoverPassword}
						options={{
							headerShown: false,
						}}
					/>
				</>
			) : (
				<>
					<Stack.Screen
						name='AppTabs'
						component={AppTabs}
						options={{
							headerShown: false,
						}}
					/>
				</>
			)}
		</Stack.Navigator>
	);
}

export default Auth;
