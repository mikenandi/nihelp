import React from "react";
import {StyleSheet} from "react-native";
import {HeadingL} from "../../Components/Typography";
import Color from "../../Components/Color";

function Logo(props) {
	return (
		<>
			<HeadingL style={styles.logoText}>VBAS</HeadingL>
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
});

export {Logo};
