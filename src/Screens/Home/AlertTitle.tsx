import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Color from "../../Components/Color";
import {Ionicons} from "@expo/vector-icons";
import {Body} from "../../Components/Typography";

const AlertTitle: React.FC = () => {
	return (
		<>
			<View style={styles.alertContainer}>
				<Ionicons
					name="ios-notifications-circle-outline"
					size={28}
					color={Color.dimblack}
				/>
				<Body style={styles.alertText}>Recent Breakdown Alerts</Body>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	alertText: {
		fontWeight: "bold",
		marginLeft: 10,
		color: Color.dimblack,
	},
	alertContainer: {
		flexDirection: "row",
		marginTop: 20,
		padding: 10,
		backgroundColor: Color.lightgray,
		borderRadius: 100,
	},
});

export {AlertTitle};
