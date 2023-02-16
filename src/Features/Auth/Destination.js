import React from "react";
import {StyleSheet, View, StatusBar, TextInput} from "react-native";
import {HeadingL, HeadingM, HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";
import {ButtonL, OutlineButtonL} from "../../Components/Buttons";
import {useDispatch} from "react-redux";
import WelcomeSvg from "../../../assets/svg/welcome_landlord.svg";
import {ModalScreenWhite} from "../../Layouts/ModalScreen";
import {BottomSheet, PostQn} from "../../Components/PostQn";
import {Logo} from "./Logo";

function Destination(props) {
	const dispatch = useDispatch();

	const handleSignIn = async () => {
		props.navigation.navigate("SignIn");
		return;
	};

	// Navigate to sign up screen
	const handleSignUp = () => {
		props.navigation.navigate("SignUp");

		return;
	};

	return (
		<>
			<View style={styles.container}>
				<Logo />

				<HeadingS style={styles.qnText}>where are you going to?</HeadingS>

				<TextInput style={styles.textInput} />

				<ButtonL
					action='Done'
					onPress={handleSignUp}
					// style={styles.buttonAbsolute}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		backgroundColor: Color.white,
		justifyContent: "center",
	},
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
	bodyText: {
		color: Color.dimblack,
		fontWeight: "bold",
		marginTop: 10,
	},
	descText: {
		color: Color.white,
		// fontWeight: "bold",
		fontSize: 14,
		// backgroundColor: Color.lightblue,
		marginHorizontal: 20,
		textTransform: "uppercase",
	},
	buttonAbsolute: {
		position: "absolute",
		bottom: 120,
	},
	buttonAbsolute1: {
		position: "absolute",
		bottom: 50,
	},
	WelcomeContainer: {
		width: "100%",
		backgroundColor: Color.primary,
		// borderBottomEndRadius: 75,
		paddingBottom: 20,
		alignItems: "center",
		aspectRatio: 10 / 7.5,
		justifyContent: "center",
	},
	getstartedText: {
		color: Color.white,
		// fontWeight: "bold",
		fontFamily: "poppins",
	},
	dot: {
		color: Color.warning,
		fontSize: 64,
	},
	textInput: {
		fontSize: 30,
		borderBottomWidth: 2.5,
		width: 240,
		height: 60,
		borderBottomColor: Color.warning,
	},
	qnText: {
		color: Color.dimblack,
		marginTop: 20,
	},
});

export default React.memo(Destination);
