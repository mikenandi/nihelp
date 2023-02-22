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
	carTypeReducer,
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

function SignUp(props) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const {carType, company, plateNumber, password, driver} = useSelector(
		(state) => {
			return state.auth;
		},
	);

	const handlePlateNumber = (plateNumber) => {
		dispatch(plateNumberReducer(plateNumber));

		return;
	};

	const handleCarType = (carType) => {
		dispatch(carTypeReducer(carType));
	};

	const handleCompany = (company) => {
		dispatch(companyReducer(company));

		return;
	};

	const handlePassword = (password) => {
		dispatch(passwordReducer(password));

		return;
	};

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

export default React.memo(SignUp);
