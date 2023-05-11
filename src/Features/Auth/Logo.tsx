import React from "react";
import {StyleSheet, View} from "react-native";
import {HeadingL} from "../../Components/Typography";
import Color from "../../Components/Color";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function Logo(props: any) {
	return (
		<>
			{/* <HeadingL style={styles.logoText}>VBAS</HeadingL> */}
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='tow-truck'
					size={32}
					color={Color.warning}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	logoText: {
		// fontWeight: "bold",
		color: Color.primary,
		fontFamily: "poppins",
		// fontSize: 30,
	},
	dot: {
		color: Color.warning,
		fontSize: 64,
	},
	container: {
		backgroundColor: Color.lightgray,
		width: 60,
		aspectRatio: 10 / 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
});

export {Logo};
