import React from "react";
import {StyleSheet, Modal, View} from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import {useDispatch, useSelector} from "react-redux";
import {AntDesign, FontAwesome5} from "@expo/vector-icons";
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
import {getUserProfile} from "../../Api/Services/Backend/Profile";
import * as SecureStorage from "expo-secure-store";
import {
	driverProfileReducer,
	logOutReducer,
	ownerProfileReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import Loader from "../../Components/Loader";

const Home: React.FC = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {authToken, isOwner} = useSelector((state: RootState) => {
		return state.auth;
	});

	React.useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				let response = await getUserProfile({authToken});

				if (response.statusCode === "401") {
					await SecureStorage.deleteItemAsync("authToken");

					dispatch(logOutReducer());

					return;
				}

				if (response.isOwner) {
					dispatch(
						ownerProfileReducer({
							name: response.name,
							email: response.email,
							phoneNumber: response.phoneNumber,
							vehicles: 12,
							activeRoutes: 3,
							reportedBreakdowns: 2,
							isOwner: response.isOwner,
						})
					);

					setIsLoading(false);

					return;
				}

				dispatch(
					driverProfileReducer({
						name: response.name,
						email: response.email,
						plateNumber: response.plateNumber,
						licenseNo: response.licenseNo,
						phoneNumber: response.phoneNumber,
						isOwner: response.isOwner,
					})
				);

				setIsLoading(false);

				return;
			} catch (error) {
				console.log(error);

				return;
			}
		})();
	}, []);

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

	if (isLoading)
		return (
			<>
				<Loader />
			</>
		);

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

				{isOwner && (
					<FAB onPress={handleRegisterVehicle}>
						<AntDesign name="plus" size={24} color="black" />
					</FAB>
				)}

				{!isOwner && (
					<FAB onPress={handleBreakdownReport}>
						<FontAwesome5
							name="exclamation-triangle"
							size={24}
							color={Color.warning}
						/>
					</FAB>
				)}
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
