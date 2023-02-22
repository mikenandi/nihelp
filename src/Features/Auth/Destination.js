import React from "react";
import {StyleSheet, View, StatusBar, TextInput} from "react-native";
import {HeadingL, HeadingM, HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";
import {ButtonL} from "../../Components/Buttons";
import {useDispatch, useSelector} from "react-redux";

import {Logo} from "./Logo";
import {
	destinationReducer,
	startingReducer,
} from "../../Redux/Features/Location/locationSlice";
import {postRoute} from "../../Api/Services/Backend/Report";
import {signinReducer} from "../../Redux/Features/Auth/AuthSlice";

function Destination(props) {
	const dispatch = useDispatch();

	const {starting, destination} = useSelector((state) => {
		return state.location;
	});

	const {userId, authToken} = useSelector((state) => {
		return state.auth;
	});

	const handleStarting = (starting) => {
		dispatch(startingReducer(starting));
		return;
	};

	const handleDestination = (destination) => {
		dispatch(destinationReducer(destination));
		return;
	};

	// Navigate to sign up screen
	const handleDone = async () => {
		try {
			let data = {
				userId,
				authToken,
				starting,
				destination,
			};

			let response = await postRoute(data);

			dispatch(signinReducer());

			return;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<View style={styles.container}>
				<Logo />

				<HeadingS style={styles.qnText}>what is your route?</HeadingS>

				<TextInput
					placeholder='From'
					value={starting}
					onChangeText={handleStarting}
					style={{
						...styles.textInput,
						borderBottomColor: Color.primary,
						marginBottom: 20,
					}}
				/>

				<TextInput
					value={destination}
					onChangeText={handleDestination}
					placeholder='To'
					style={styles.textInput}
				/>

				<ButtonL
					action='Done'
					onPress={handleDone}
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
