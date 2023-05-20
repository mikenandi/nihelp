import {FontAwesome5, Fontisto, Octicons} from "@expo/vector-icons";
import React from "react";
import {View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import Color from "../../Components/Color";
import {Card} from "../../Components/Card";
import {Body, HeadingS} from "../../Components/Typography";
import {useDispatch, useSelector} from "react-redux";
import {vehicleDetailsVisibleReducer} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {RootState} from "../../Redux";
import {VehicleDetails} from "./VehicleDetails";
import {getVehicle} from "../../Api/Services/Backend/Vehicle";
import {
	VehicleState,
	saveVehicleReducer,
} from "../../Redux/Features/Vehicle/VehicleSlice";

interface VehicleProps {
	plateNumber: string;
	model: string;
	make: string;
	route?: string;
	id: number;
}

const Vehicle: React.FC<VehicleProps> = (props) => {
	const dispatch = useDispatch();

	const visible: boolean = useSelector((state: RootState) => {
		return state.vehicleModal.vehicleDetailsVisible;
	});

	const {authToken}: {authToken: string} = useSelector((state: RootState) => {
		return state.auth;
	});

	const handleVehicleDetails = async (): Promise<void> => {
		let response: VehicleState = await getVehicle(authToken, props.id);

		dispatch(saveVehicleReducer({...response}));

		dispatch(vehicleDetailsVisibleReducer());
	};

	return (
		<>
			<TouchableOpacity onPress={handleVehicleDetails} activeOpacity={0.9}>
				<Card style={styles.container}>
					<View style={styles.detailsWrapper}>
						<View style={styles.iconContainer}>
							<Fontisto name="truck" size={35} color={Color.dimblack} />
						</View>

						<View style={styles.detailsContainer}>
							<HeadingS style={styles.title}>{props.plateNumber}</HeadingS>
							<Body style={styles.text}>
								{props.make} {props.model}
							</Body>

							<View style={styles.routeContainer}>
								<FontAwesome5 name="route" size={20} color={Color.primary} />
								<Body style={styles.routeText}>Not on route</Body>
							</View>
						</View>
					</View>

					<Octicons name="dot-fill" size={16} color={Color.primary} />
				</Card>
			</TouchableOpacity>

			<Modal visible={visible} animationType="fade">
				<VehicleDetails />
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderRadius: 10,
		marginVertical: 10,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		fontWeight: "bold",
		marginBottom: 10,
	},
	text: {
		// fontSize: 16,
		marginBottom: 5,
	},
	detailsContainer: {
		marginLeft: 15,
	},
	routeContainer: {
		flexDirection: "row",
		marginTop: 10,
	},
	routeText: {
		marginLeft: 10,
		color: Color.dimblack,
		fontWeight: "bold",
	},
	iconContainer: {
		backgroundColor: Color.lightgray,
		width: 60,
		aspectRatio: 1 / 1,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	detailsWrapper: {
		flexDirection: "row",
	},
});

export {Vehicle};
