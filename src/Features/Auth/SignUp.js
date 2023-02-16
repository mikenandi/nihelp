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
	resetConfirmEmailFrom,
	saveDataFromSignUp,
} from "../../Redux/Features/Auth/AuthSlice";
import {ErrorMsg} from "../../Components/ErrorMsg";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import Loader from "../../Components/Loader";
import {useSelector} from "react-redux";
import {isEmail} from "../../Helpers/EmailCheck";
import {Logo} from "./Logo";

function SignUp(props) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = React.useState(false);

	const {carType, company, plateNumber, password} = useSelector((state) => {
		return state.auth;
	});

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
		props.navigation.navigate("SignIn");

		return;
	};

	// Navigating to confirm email screen
	const handleSignUp = async () => {
		if (!plateNumber || !company || !carType || !password) {
			dispatch(errorMsg("fill all fields"));

			return;
		}

		if (password.length < 6) {
			dispatch(errorMsg("password should have at least 6 charracters"));

			return;
		}

		setIsLoading(true);

		let data = {
			company,
			password,
			plateNumber,
			carType,
		};

		let response = await signUp(data);

		if (response.success) {
			dispatch(saveDataFromSignUp(response.data));
			dispatch(companyReducer(""));
			dispatch(plateNumberReducer(""));
			dispatch(passwordReducer(""));
			dispatch(carTypeReducer(""));

			setIsLoading(false);
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

				<InputText
					label='Company'
					value={company}
					onChangeText={handleCompany}
				/>

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
