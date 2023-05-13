import React, {useState} from "react";
import {StyleSheet, Modal, FlatList, View, Image} from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import {useDispatch, useSelector} from "react-redux";
import {AntDesign, Feather, FontAwesome5} from "@expo/vector-icons";
import {FAB} from "../../Components/FAB";
import Topbar from "../../Layouts/Topbar";
import {Vehicle} from "./Vehicle";
import {RegisterVehicle} from "./RegisterVehicle";
import {RootState} from "../../Redux";
import {
	breakdownReportVisibleReducer,
	registerVehicleVisibleReducer,
} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {AlertTitle} from "./AlertTitle";
import {Alert} from "./Alert";
import {ReportBreakdown} from "../../Features/ReportBreakdown";

const Home: React.FC = () => {
	const dispatch = useDispatch();

	const visible: boolean = useSelector((state: RootState) => {
		return state.vehicleModal.registerVehicleVisible;
	});

	const breakdownVisible: boolean = useSelector((state: RootState) => {
		return state.vehicleModal.breakdownReportVisible;
	});

	const handleRegisterVehicle = (): void => {
		dispatch(registerVehicleVisibleReducer());
	};

	const handleBreakdownReport = (): void => {
		dispatch(breakdownReportVisibleReducer());
	};

	return (
		<>
			<Screen>
				<Topbar title="Hi , Neema" />

				<View style={styles.container}>
					<Vehicle />
					<AlertTitle />

					<Alert />
					<Alert />
				</View>

				{false && (
					<FAB onPress={handleRegisterVehicle}>
						<AntDesign name="plus" size={24} color="black" />
					</FAB>
				)}

				<FAB onPress={handleBreakdownReport}>
					<FontAwesome5
						name="exclamation-triangle"
						size={24}
						color={Color.warning}
					/>
				</FAB>
			</Screen>

			<Modal visible={visible} animationType="fade">
				<RegisterVehicle />
			</Modal>

			<Modal visible={breakdownVisible} animationType="fade">
				<ReportBreakdown />
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		marginTop: 20,
		marginHorizontal: 15,
	},
	scrollContainer: {
		paddingBottom: 70,
	},
	fab: {
		backgroundColor: Color.lightblue,
	},
	startPostingContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	emptyImg: {
		width: 240,
		height: undefined,
		aspectRatio: 10 / 10,
	},
	notifyContainer: {
		backgroundColor: Color.white,
		top: 20,
		borderRadius: 100,
	},
});

export default Home;
