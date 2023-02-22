import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";

function HelpType(props) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.dot}>{props.children}</View>
				<View>
					<HeadingS style={styles.msgText}>{props.name}</HeadingS>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		// backgroundColor: Color.lightgray,
		// padding: 10,
		flexDirection: "row",
		alignItems: "center",
		aspectRatio: 10 / 2.5,
		marginTop: 40,
		marginLeft: 15,
	},
	timeText: {
		color: Color.dimblack,
		marginTop: 5,
	},
	dot: {
		// width: 10,
		aspectRatio: 1 / 1,
		backgroundColor: Color.lightblue,
		borderRadius: 8,
		marginRight: 15,
		// marginTop:20
		padding: 10,
	},
	msgText: {
		// fontWeight: "bold",
		// fontSize: 18,
		// backgroundColor: Color.lightred,
	},
});

export {HelpType};
