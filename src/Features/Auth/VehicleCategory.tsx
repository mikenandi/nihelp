import React from "react";
import {StyleSheet, View} from "react-native";
import {HeadingM, Body} from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import {InputText, InputPassword} from "../../Components/Inputs";
import {ButtonL, TextButton} from "../../Components/Buttons";
import {useDispatch} from "react-redux";
import {signUp} from "../../Api/Auth/Auth";
import {
// @ts-expect-error TS(2614): Module '"../../Redux/Features/Auth/AuthSlice"' has... Remove this comment to see the full error message
	carTypeReducer,
// @ts-expect-error TS(2614): Module '"../../Redux/Features/Auth/AuthSlice"' has... Remove this comment to see the full error message
	companyReducer,
	driverReducer,
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
function VehicleCategory(props) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const {carType, company, plateNumber, password, driver} = useSelector(
		(state) => {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			return state.auth;
		},
	);

// @ts-expect-error TS(7006): Parameter 'plateNumber' implicitly has an 'any' ty... Remove this comment to see the full error message
	const handlePlateNumber = (plateNumber) => {
		dispatch(plateNumberReducer(plateNumber));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'carType' implicitly has an 'any' type.
	const handleCarType = (carType) => {
		dispatch(carTypeReducer(carType));
	};

// @ts-expect-error TS(7006): Parameter 'company' implicitly has an 'any' type.
	const handleCompany = (company) => {
		dispatch(companyReducer(company));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'password' implicitly has an 'any' type.
	const handlePassword = (password) => {
		dispatch(passwordReducer(password));

		return;
	};

// @ts-expect-error TS(7006): Parameter 'driver' implicitly has an 'any' type.
	const handleDriver = (driver) => {
		dispatch(driverReducer(driver));

		return;
	};
	// Navigating to sign in screen
	const handleSignIn = () => {
		dispatch(companyReducer(""));
		dispatch(plateNumberReducer(""));
		dispatch(passwordReducer(""));
		dispatch(carTypeReducer(""));
		dispatch(driverReducer(""));
		props.navigation.navigate("SignIn");

		return;
	};

	// Navigating to confirm email screen
	const handleSignUp = async () => {
		if (!plateNumber || !company || !driver || !carType || !password) {
			dispatch(errorMsg("fill all fields"));

			return;
		}

		if (password.length < 6) {
			dispatch(errorMsg("password should have at least 6 charracters"));

			return;
		}

		setIsLoading(true);

		let data = {
			owner: company,
			password,
			plateNumber: plateNumber.replace(/ /gi, "-"),
			vehicleType: carType,
			driver,
		};

		let response = await signUp(data);

		if (response.success) {
			dispatch(saveDataFromSignUp(response.data));
			dispatch(companyReducer(""));
			dispatch(plateNumberReducer(""));
			dispatch(passwordReducer(""));
			dispatch(carTypeReducer(""));
			dispatch(driverReducer(""));

			setIsLoading(false);
			props.navigation.navigate("Destination");
			return;
		}

		dispatch(errorMsg(response.message));

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

				<ErrorMsg />

				<InputText label='Owner' value={company} onChangeText={handleCompany} />

				<InputText label='Driver' value={driver} onChangeText={handleDriver} />

				<InputText
					label='Plate number'
					value={plateNumber}
					onChangeText={handlePlateNumber}
				/>

				<InputText
					label='Car type'
					value={carType}
					onChangeText={handleCarType}
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

export default React.memo(VehicleCategory);
