import React from "react";
import {Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import Color from "../../Components/Color";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Body, BodyS, HeadingS} from "../../Components/Typography";
import {useDispatch, useSelector} from "react-redux";
import {breakdownVisibleReducer} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {RootState} from "../../Redux";
import BreakdownMap from "./BreakdownMap";

const Alert: React.FC = () => {
	const dispatch = useDispatch();

	const handleBreakDownLocation = (): void => {
		dispatch(breakdownVisibleReducer());
	};

	const visible = useSelector((state: RootState) => {
		return state.vehicleModal.breakdownVisible;
	});

	return (
		<>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="tow-truck"
					size={24}
					color={Color.warning}
				/>
				<View>
					<HeadingS style={styles.alertText}>T 1234 ADS</HeadingS>

					<View style={styles.locationContainer}>
						<MaterialCommunityIcons
							name="car-info"
							size={24}
							color={Color.dimblack}
						/>
						<Body style={styles.bodyText}>I have puncture</Body>
					</View>

					<TouchableOpacity
						activeOpacity={0.9}
						onPress={handleBreakDownLocation}>
						<View style={styles.locationContainer}>
							<Ionicons name="location" size={24} color={Color.primary} />
							<BodyS style={styles.locationText}>View location</BodyS>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			<Modal visible={visible} animationType="fade">
				<BreakdownMap />
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	alertText: {
		fontWeight: "bold",
		marginLeft: 10,
		// color: Color.dimblack,
	},
	container: {
		flexDirection: "row",
		marginTop: 20,
		padding: 12,
		backgroundColor: Color.lightgray,
		borderRadius: 5,
	},
	bodyText: {
		fontWeight: "bold",
		marginLeft: 10,
		// color: Color.dimblack,
	},
	locationContainer: {
		flexDirection: "row",
		marginTop: 10,
	},
	locationText: {
		color: Color.primary,
		fontWeight: "bold",
		marginLeft: 8,
		alignItems: "center",
	},
});

export {Alert};
