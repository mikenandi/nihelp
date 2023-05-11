import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {HeadingS} from "../../Components/Typography";
import Color from "../../Components/Color";
import {Feather, Ionicons} from "@expo/vector-icons";

function HelpType(props: any) {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.detailContainer}>
					<View style={styles.dot}>{props.children}</View>
					<View>
						<HeadingS style={styles.msgText}>{props.name}</HeadingS>
					</View>
				</View>

				<TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
					<View
						style={{
							...styles.selectBox,
							borderColor: props.isSelected ? Color.primary : Color.grey,
						}}>
						{props.isSelected && (
							<Ionicons
								name='md-checkmark-done-sharp'
								size={24}
								color={Color.primary}
							/>
						)}
					</View>
				</TouchableOpacity>
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
		justifyContent: "space-between",
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
	detailContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	selectBox: {
		width: 40,
		aspectRatio: 10 / 10,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2.5,
		borderColor: Color.primary,
	},
});

export {HelpType};
