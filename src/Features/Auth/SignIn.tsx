import React from "react";
import {StyleSheet, View, Modal} from "react-native";
import {Body, HeadingS} from "../../Components/Typography";
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
	cleanSigninDataReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import Loader from "../../Components/Loader";
import {NavigationProp} from "@react-navigation/native";

interface SignInProps {
	navigation: NavigationProp<any>;
}

const SignIn: React.FC<SignInProps> = (props) => {
	const dispatch = useDispatch();

	// Seting states
	const [isLoading, setIsLoading] = React.useState(false);

	const {email, password} = useSelector((state: any) => {
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
			dispatch(errorMsg("password must have 6 charracters or more"));

			return;
		}

		setIsLoading(true);

		let response = await signIn({email, password});

		if (response.access_token) {
			await SecureStore.setItemAsync("authToken", response.access_token);

			dispatch(
				logInReducer({
					authToken: response.access_token,
				})
			);

			setIsLoading(false);

			return;
		}

		setIsLoading(false);

		dispatch(errorMsg(response.message));

		return;
	};

	// Navigate to sign up screen
	const handleSignUp = (): void => {
		dispatch(cleanSigninDataReducer());

		props.navigation.navigate("SignUp");

		return;
	};

	return (
		<>
			<AuthScreen>
				{/* <Logo /> */}

				<HeadingS>Sign in to your account</HeadingS>

				<ErrorMsg />

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

export default React.memo(SignIn);
