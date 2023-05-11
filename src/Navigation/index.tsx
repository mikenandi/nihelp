import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../Layouts/Screen";
import AppTabs from "./AppTabs";
import SignIn from "../Features/Auth/SignIn";
import SignUp from "../Features/Auth/SignUp";
import VehicleCategory from "../Features/Auth/VehicleCategory";
import DriverDetails from "../Features/Auth/DriverDetails";
import RecoverPassword from "../Features/Auth/RecoverPassword";
import Welcome from "../Features/Auth/Welcome";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Components/Loader";
import {logInReducer, signinReducer} from "../Redux/Features/Auth/AuthSlice";
import {useFonts} from "expo-font";
import {useTranslation} from "react-i18next";
import * as Notifications from "expo-notifications";
import Destination from "../Features/Auth/Destination";

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
// @ts-expect-error TS(2571): Object is of type 'unknown'.
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

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
					dispatch(signinReducer());

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
						name='Destination'
						component={Destination}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='VehicleCategory'
						component={VehicleCategory}
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
						name='DriverDetails'
						component={DriverDetails}
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
