import React from "react";
import LottieView from "lottie-react-native";
import {StatusBar, View, StyleSheet, ActivityIndicator} from "react-native";
import {HeadingL} from "./Typography";
import Color from "./Color";

const Loader: React.FC = (props) => {
	return (
		<>
			<View style={styles.screen}>
				<StatusBar backgroundColor="white" />
				<LottieView
					source={require("../../assets/lotties/99274-loading.json")}
					autoPlay
					loop
				/>
			</View>
		</>
	);
};

const Loading: React.FC = (props) => {
	return (
		<>
			<View style={styles.transparentContainer} />
			<View style={styles.container}>
				<ActivityIndicator
					animating={true}
					size="large"
					color={Color.primary}
					style={styles.activityIndicator}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: Color.black,
		// opacity: 0.2,
	},
	activityIndicator: {
		width: "20%",
		aspectRatio: 1 / 1,
		transform: [{scaleX: 1.8}, {scaleY: 1.8}],
	},
	transparentContainer: {
		backgroundColor: Color.black,
		width: "100%",
		height: "100%",
		position: "absolute",
		opacity: 0.5,
	},
});

export {Loading};

export default React.memo(Loader);
