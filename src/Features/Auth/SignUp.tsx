import React from "react";
import {StyleSheet, View} from "react-native";
import {HeadingM, Body, HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import {InputText, InputPassword} from "../../Components/Inputs";
import {ButtonL, TextButton} from "../../Components/Buttons";
import {useDispatch} from "react-redux";
import {signUp} from "../../Api/Auth/Auth";
import {
	brandReducer,
	driverReducer,
	modelReducer,
	ownerReducer,
	passwordReducer,
	plateNumberReducer,
	saveDataFromSignUp,
} from "../../Redux/Features/Auth/AuthSlice";
import {ErrorMsg} from "../../Components/ErrorMsg";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import Loader from "../../Components/Loader";
import {useSelector} from "react-redux";
import {Logo} from "./Logo";

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function SignUp(props) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const {model, owner, plateNumber, brand} = useSelector((state) => {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
		return state.auth;
	});

// @ts-expect-error TS(7006): Parameter 'plateNumber' implicitly has an 'any' ty... Remove this comment to see the full error message
	const handlePlateNumber = (plateNumber) => {
		dispatch(plateNumberReducer(plateNumber));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'model' implicitly has an 'any' type.
	const handleModel = (model) => {
		dispatch(modelReducer(model));
	};

// @ts-expect-error TS(7006): Parameter 'owner' implicitly has an 'any' type.
	const handleOwner = (owner) => {
		dispatch(ownerReducer(owner));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'brand' implicitly has an 'any' type.
	const handleBrand = (brand) => {
		dispatch(brandReducer(brand));

		return;
	};
	// Navigating to sign in screen
	const handleSignIn = () => {
		dispatch(ownerReducer(""));
		dispatch(plateNumberReducer(""));
		dispatch(modelReducer(""));
		dispatch(brandReducer(""));
		props.navigation.navigate("SignIn");

		return;
	};

	// Navigating to confirm email screen
	const handleNext = () => {
		if (!owner) {
			dispatch(errorMsg("Enter owner's name"));

			return;
		}

		if (!brand) {
			dispatch(errorMsg("Enter car brand"));

			return;
		}

		if (!model) {
			dispatch(errorMsg("Enter car model"));

			return;
		}

		if (!plateNumber) {
			dispatch(errorMsg("Enter car plate number"));

			return;
		}

		props.navigation.navigate("DriverDetails");

		return;
	};

	return (
		<>
			<AuthScreen>
				<Logo />

				<HeadingS>Vehicle Details</HeadingS>

				<ErrorMsg />

				<InputText label="name" value={owner} onChangeText={handleOwner} />

				<InputText label="email" value={brand} onChangeText={handleBrand} />

				<InputPassword
					label="Password"
// @ts-expect-error TS(2304): Cannot find name 'password'.
					value={password}
// @ts-expect-error TS(2304): Cannot find name 'handlePassword'.
					onChangeText={handlePassword}
				/>

				<ButtonL action="next" onPress={handleNext} />

				<View style={styles.bottomQuestionContainer}>
					<Body style={styles.questionText}>Have acount?</Body>
					<TextButton action="sign in" onPress={handleSignIn} />
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

export default React.memo(SignUp);
