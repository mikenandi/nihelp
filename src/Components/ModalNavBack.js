import React from "react";
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";
import Color from "./Color";
import {HeadingS} from "./Typography";
import {Entypo, Ionicons, MaterialIcons} from "@expo/vector-icons";

function ModalNavBack(props) {
	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={styles.iconBtn}
					onPress={props.handleBack}>
					<Ionicons name='arrow-back-sharp' size={28} color={Color.white} />
				</TouchableOpacity>
				<HeadingS numberOfLines={1} style={styles.titleTxt}>
					{props.title}
				</HeadingS>
			</View>
		</>
	);
}

function ModalNavBackWhite(props) {
	return (
		<>
			<View style={styles.containerWhite}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={styles.iconBtn}
					onPress={props.handleBack}>
					<MaterialIcons name='close' size={28} color={Color.dimblack} />
				</TouchableOpacity>
				<HeadingS numberOfLines={1} style={styles.titleTxt}>
					{props.title}
				</HeadingS>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Color.primary,
	},
	containerWhite: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Color.white,
	},
	icon: {},
	iconBtn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Color.lightgray,
		marginRight: 10,
	},
	titleTxt: {
		color: Color.dimblack,
	},
});

export {ModalNavBack, ModalNavBackWhite};
