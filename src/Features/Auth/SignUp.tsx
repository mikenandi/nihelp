import React from "react";
import {StyleSheet, View} from "react-native";
import {Body, HeadingS} from "../../Components/Typography";
import AuthScreen from "../../Layouts/AuthScreen";
import {InputText, InputPassword} from "../../Components/Inputs";
import {ButtonL, TextButton} from "../../Components/Buttons";
import {useDispatch} from "react-redux";
import {
	emailReducer,
	licenseNoReducer,
	nameReducer,
	passwordReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import {ErrorMsg} from "../../Components/ErrorMsg";
import {useSelector} from "react-redux";
import {NavigationProp} from "@react-navigation/native";
import {DropdownInput} from "../../Components/DropdownInput";
import {RootState} from "../../Redux";

type SignUpProps = {
	navigation: NavigationProp<any>;
};

const SignUp: React.FC<SignUpProps> = (props) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {name, email, password, userType, licenseNo} = useSelector(
		(state: RootState) => {
			return state.auth;
		}
	);

	const handleSignIn = (): void => {
		props.navigation.navigate("SignIn");
	};

	const handlePassword = (password: string): void => {
		dispatch(passwordReducer(password));
	};

	const handleName = (name: string): void => {
		dispatch(nameReducer(name));
	};

	const handleEmail = (email: string): void => {
		dispatch(emailReducer(email));
	};

	const handleLicenseNo = (licenseNo: string): void => {
		dispatch(licenseNoReducer(licenseNo));
	};

	const handleSignup = (): void => {};

	return (
		<>
			<AuthScreen>
				{/* <Logo /> */}

				<HeadingS>Create account</HeadingS>

				<ErrorMsg />

				<InputText label="name" value={name} onChangeText={handleName} />

				<DropdownInput />

				{userType === "driver" && (
					<InputText
						label="licence no"
						value={licenseNo}
						onChangeText={handleLicenseNo}
					/>
				)}

				<InputText label="email" value={email} onChangeText={handleEmail} />

				<InputPassword
					label="Password"
					value={password}
					onChangeText={handlePassword}
				/>

				<ButtonL action="sign up" onPress={handleSignup} />

				<View style={styles.bottomQuestionContainer}>
					<Body style={styles.questionText}>Have account?</Body>
					<TextButton action="sign in" onPress={handleSignIn} />
				</View>
			</AuthScreen>
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
});

export default React.memo(SignUp);
