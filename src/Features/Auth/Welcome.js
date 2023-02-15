import React from "react";
import {StyleSheet, View, StatusBar} from "react-native";
import {HeadingL, HeadingM, HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";
import {ButtonL, OutlineButtonL} from "../../Components/Buttons";
import {useDispatch} from "react-redux";
import WelcomeSvg from "../../../assets/svg/welcome_landlord.svg";
import {ModalScreenWhite} from "../../Layouts/ModalScreen";
import {BottomSheet, PostQn} from "../../Components/PostQn";

function Welcome(props) {
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
			<StatusBar backgroundColor={Color.primary} />

			<View style={styles.container}>
				<View style={styles.WelcomeContainer}>
					<HeadingL style={styles.getstartedText}>VBAS</HeadingL>
					<HeadingS style={styles.descText}>
						Vehicle breakdown assistance system
					</HeadingS>
				</View>
				<BottomSheet />

				<ButtonL
					action='Sign up'
					onPress={handleSignUp}
					style={styles.buttonAbsolute}
				/>

				<OutlineButtonL
					action='Sign in'
					onPress={handleSignIn}
					style={styles.buttonAbsolute1}
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
});

export default React.memo(Welcome);
