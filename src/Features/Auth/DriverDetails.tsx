import React from "react";
import {StyleSheet, View} from "react-native";
import {HeadingM, Body, HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import {InputText, InputPassword, InputNumber} from "../../Components/Inputs";
import {ButtonL, TextButton} from "../../Components/Buttons";
import {useDispatch} from "react-redux";
import {signUp} from "../../Api/Auth/Auth";
import {
	brandReducer,
	driverReducer,
	modelReducer,
	ownerReducer,
	passwordReducer,
	phoneNumberReducer,
	plateNumberReducer,
	saveDataFromSignUp,
} from "../../Redux/Features/Auth/AuthSlice";
import {ErrorMsg} from "../../Components/ErrorMsg";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import Loader from "../../Components/Loader";
import {useSelector} from "react-redux";
import {Logo} from "./Logo";

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function DriverDetails(props) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const {owner, model, brand, plateNumber, password, phoneNumber} = useSelector(
		(state) => {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			return state.auth;
		},
	);

// @ts-expect-error TS(7006): Parameter 'phoneNumber' implicitly has an 'any' ty... Remove this comment to see the full error message
	const handlePhoneNumber = (phoneNumber) => {
		dispatch(phoneNumberReducer(phoneNumber));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'password' implicitly has an 'any' type.
	const handlePassword = (password) => {
		dispatch(passwordReducer(password));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'name' implicitly has an 'any' type.
	const handleDriverName = (name) => {
		dispatch(driverReducer(name));

		return;
	};
	// Navigating to sign in screen
	const handleSignIn = () => {
// @ts-expect-error TS(2304): Cannot find name 'companyReducer'.
		dispatch(companyReducer(""));
		dispatch(plateNumberReducer(""));
		dispatch(passwordReducer(""));
		dispatch(modelReducer(""));
		dispatch(driverReducer(""));
		dispatch(brandReducer(""));

		props.navigation.navigate("SignIn");

		return;
	};

	// Navigating to confirm email screen
	const handleSignUp = async () => {
		if (!phoneNumber) {
			dispatch(errorMsg("Enter phone number"));

			return;
		}

		if (phoneNumber.length < 10) {
			dispatch(errorMsg("Incorect phone number"));

			return;
		}

		if (!password) {
			dispatch(errorMsg("Enter password"));

			return;
		}

		if (password.length < 6) {
			dispatch(errorMsg("password should have at least 6 charracters"));

			return;
		}

		setIsLoading(true);

		let data = {
			owner,
			model,
			brand,
			driverPhone: phoneNumber,
			password,
			plateNumber: plateNumber.replace(/ /gi, "-"),
		};

		let response = await signUp(data);

		if (response.success) {
			dispatch(saveDataFromSignUp(response.data));
			dispatch(ownerReducer(""));
			dispatch(plateNumberReducer(""));
			dispatch(passwordReducer(""));
			dispatch(modelReducer(""));
			dispatch(driverReducer(""));
			dispatch(phoneNumberReducer(""));
			dispatch(brandReducer(""));

			setIsLoading(false);
			props.navigation.navigate("Destination");
			return;
		}

		dispatch(errorMsg("failed to register"));

		setIsLoading(false);

		return;
	};

	if (isLoading) {
		return (
			<>
				<Loader />
			</>
		);
	}

	return (
		<>
			<AuthScreen>
				<Logo />
				<HeadingS>Driver details</HeadingS>
				<ErrorMsg />
				{/* 
				<InputText
					label='Name'
					value={driverName}
					onChangeText={handleDriverName}
				/> */}
				{/* 
				<InputText
					label='Linsence No.'
					value={driver}
					onChangeText={handleDriver}
				/> */}

				<InputNumber
					label='Driver phone'
					value={phoneNumber}
					onChangeText={handlePhoneNumber}
				/>

				<InputPassword
					label='Password'
					value={password}
					onChangeText={handlePassword}
				/>

				<ButtonL action='register' onPress={handleSignUp} />

				<View style={styles.bottomQuestionContainer}>
					<Body style={styles.questionText}>Have acount?</Body>
					<TextButton action='sign in' onPress={handleSignIn} />
				</View>
			</AuthScreen>
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

export default React.memo(DriverDetails);
