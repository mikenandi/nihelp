import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import Color from "./Color";
import {Body, HeadingS} from "./Typography";
import {useSelector, useDispatch} from "react-redux";
import {Feather} from "@expo/vector-icons";

function FAB(props) {
	return (
		<>
			<TouchableOpacity
				onPress={props.onPress}
				activeOpacity={0.8}
				style={{...styles.container, ...props.style}}>
				{props.children}
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.primary,
		width: "20%",
		aspectRatio: 1 / 1,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		right: 15,
		// bottom: 20,
		shadowColor: Color.black,
		shadowOffset: {width: 0.9, height: 0.9},
		shadowRadius: 15,
		shadowOpacity: 1,
		elevation: 6,
		// borderRadius: 1,
	},
});

export {FAB};
