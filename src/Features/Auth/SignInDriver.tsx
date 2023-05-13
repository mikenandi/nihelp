import React from "react";
import {StyleSheet, View, Modal} from "react-native";
import {HeadingM, Body, HeadingS} from "../../Components/Typography";
import AuthScreen from "../../Layouts/AuthScreen";
import {InputText, InputPassword} from "../../Components/Inputs";
import {ButtonL, TextButton} from "../../Components/Buttons";
import {signIn} from "../../Api/Auth/Auth";
import {ErrorMsg} from "../../Components/ErrorMsg";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import {useDispatch, useSelector} from "react-redux";
import {
	logInReducer,
	passwordReducer,
	emailReducer,
	platenumberReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../Components/Loader";
import {NavigationProp} from "@react-navigation/native";
import {RootState} from "../../Redux";

interface SignInDriverProps {
	navigation: NavigationProp<any>;
}

const SignInDriver: React.FC<SignInDriverProps> = (props) => {
	const dispatch = useDispatch();

	// Seting states
	const [isLoading, setIsLoading] = React.useState(false);

	const {email, password, platenumber} = useSelector((state: RootState) => {
		return state.auth;
	});

	// Input function for email entry
	const handleEmail = (email: string): void => {
		dispatch(emailReducer(email));
	};

	// Input function for password entry
	const handlePassword = (password: string): void => {
		dispatch(passwordReducer(password));

		return;
	};

	// Handling SingIn
	const handleSignIn = async () => {
		if (!email || !password) {
			dispatch(errorMsg("fill all fields"));

			return;
		}

		if (password.length < 6) {
			dispatch(errorMsg("password should have altleast 6 characters"));

			return;
		}

		setIsLoading(true);

		let data = {email, password, platenumber};

		let response = await signIn(data);

		if (response.success) {
			await SecureStore.setItemAsync("authToken", response.data.auth_token);

			await AsyncStorage.setItem("userId", response.data.user_id);

			dispatch(
				logInReducer({
					userId: response.data.user_id,
					authToken: response.data.auth_token,
				})
			);

			// dispatch(ownerReducer(""));

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
		dispatch(passwordReducer(""));

		props.navigation.navigate("SignUp");

		return;
	};

	const handlePlateNumber = (platenumber: string): void => {
		dispatch(platenumberReducer(platenumber));
	};

	const handleForgotPassword = (): void => {
		dispatch(emailReducer(""));
		dispatch(passwordReducer(""));

		props.navigation.navigate("ForgotPassword");
	};

	return (
		<>
			<AuthScreen>
				{/* <Logo /> */}

				<HeadingS>Sign in to your account</HeadingS>

				<ErrorMsg />

				<InputText
					label="Plate number"
					value={platenumber}
					onChangeText={handlePlateNumber}
				/>

				<InputText label="email" value={email} onChangeText={handleEmail} />

				<InputPassword
					label="Password"
					value={password}
					onChangeText={handlePassword}
				/>

				<View style={styles.forgotPasswordContainer}>
					{/* <TextButton action='forgot password' onPress={handleForgotPassword} /> */}
				</View>

				<ButtonL action="sign in" onPress={handleSignIn} />

				<View style={styles.bottomQuestionContainer}>
					<Body style={styles.questionText}>Don't have acount?</Body>

					<TextButton
						action="Register"
						onPress={handleSignUp}
						style={styles.registerBtn}
					/>
				</View>
			</AuthScreen>

			<Modal animationType="fade" visible={isLoading} transparent={false}>
				<Loader />
			</Modal>
		</>
	);
};

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
	registerBtn: {
		fontSize: 20,
	},
});

export default React.memo(SignInDriver);
