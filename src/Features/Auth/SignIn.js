import React from "react";
import {StyleSheet, View, Modal} from "react-native";
import {HeadingM, Body} from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import {InputText, InputPassword} from "../../Components/Inputs";
import {ButtonL, TextButton} from "../../Components/Buttons";
import {signIn} from "../../Api/Auth/Auth";
import {ErrorMsg} from "../../Components/ErrorMsg";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import {useDispatch, useSelector} from "react-redux";
import {
	companyReducer,
	driverReducer,
	logInReducer,
	passwordReducer,
	plateNumberReducer,
	saveEmail,
	savePassword,
} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../Components/Loader";
import {isEmail} from "../../Helpers/EmailCheck";
import {Logo} from "./Logo";

function SignIn(props) {
	const dispatch = useDispatch();

	// Seting states
	const [isLoading, setIsLoading] = React.useState(false);
	const {plateNumber, password, driver} = useSelector((state) => {
		return state.auth;
	});

	// Input function for email entry
	const handlePlateNumber = (plateNumber) => {
		dispatch(plateNumberReducer(plateNumber));

		return;
	};

	// Input function for password entry
	const handlePassword = (password) => {
		dispatch(passwordReducer(password));

		return;
	};

	const handleDriver = (driver) => {
		dispatch(driverReducer(driver));

		return;
	};

	// Handling SingIn
	const handleSignIn = async () => {
		if (!plateNumber || !password) {
			dispatch(errorMsg("fill all fields"));

			return;
		}

		if (password.length < 6) {
			dispatch(errorMsg("password should have altleast 6 characters"));

			return;
		}

		setIsLoading(true);

		let data = {plateNumber, password};

		let response = await signIn(data);

		if (response.success) {
			await SecureStore.setItemAsync("authToken", response.data.auth_token);

			await AsyncStorage.setItem("userId", response.data.user_id);

			dispatch(
				logInReducer({
					userId: response.data.user_id,
					authToken: response.data.auth_token,
				}),
			);

			dispatch(companyReducer(""));
			dispatch(plateNumberReducer(""));
			dispatch(passwordReducer(""));
			props.navigation.navigate("Destination");
			setIsLoading(false);

			return;
		}

		setIsLoading(false);

		// console.log(response);
		if (response.code === "not_found") {
			dispatch(errorMsg(response.message));

			return;
		}

		if (response.code === "incorrect") {
			dispatch(errorMsg(response.message));

			return;
		}

		dispatch(errorMsg("Failed to sign in"));

		return;
	};

	// Navigate to sign up screen
	const handleSignUp = () => {
		dispatch(plateNumberReducer(""));

		dispatch(passwordReducer(""));

		props.navigation.navigate("SignUp");

		return;
	};

	const handleForgotPassword = () => {
		dispatch(saveEmail(""));
		dispatch(savePassword(""));

		props.navigation.navigate("ForgotPassword");

		return;
	};

	return (
		<>
			<AuthScreen>
				<Logo />

				<ErrorMsg />

				<InputText
					label='Plate number'
					value={plateNumber}
					onChangeText={handlePlateNumber}
				/>

				<InputPassword
					label='Password'
					value={password}
					onChangeText={handlePassword}
				/>

				<View style={styles.forgotPasswordContainer}>
					{/* <TextButton action='forgot password' onPress={handleForgotPassword} /> */}
				</View>

				<ButtonL action='sign in' onPress={handleSignIn} />

				<View style={styles.bottomQuestionContainer}>
					<Body style={styles.questionText}>Don't have acount?</Body>

					<TextButton action='Register' onPress={handleSignUp} />
				</View>
			</AuthScreen>

			<Modal animationType='fade' visible={isLoading} transparent={false}>
				<Loader />
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	forgotPasswordContainer: {
		width: 260,
		alignItems: "flex-end",
	},
	bottomQuestionContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	questionText: {
		marginTop: 15,
		marginRight: 5,
	},
});

export default React.memo(SignIn);
