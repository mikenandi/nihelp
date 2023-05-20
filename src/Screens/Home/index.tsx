import React from "react";
import {StyleSheet, Modal, View, FlatList} from "react-native";
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
import {getVehicles} from "../../Api/Services/Backend/Vehicle";

interface IVehicle {
	id: number;
	make: string;
	bodyType: string;
	model: string;
	chassisNumber: string;
	modelYear: string;
	createdAt: string;
	updatedAt: string;
	fuelType: string;
	plateNumber: string;
	userId: number;
}

const Home: React.FC = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {authToken, isOwner} = useSelector((state: RootState) => {
		return state.auth;
	});

	const [vehicles, setVehicles] = React.useState<IVehicle[]>([]);

	const visible: boolean = useSelector((state: RootState) => {
		return state.vehicleModal.registerVehicleVisible;
	});

	React.useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				let response = await getUserProfile({authToken});

				let vehicles = await getVehicles(authToken);

				setVehicles(vehicles);

				if (response.statusCode === 401) {
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
	}, [visible]);

	const breakdownVisible: boolean = useSelector((state: RootState) => {
		return state.vehicleModal.breakdownReportVisible;
	});

	const handleRegisterVehicle = (): void => {
		dispatch(registerVehicleVisibleReducer());
	};

	const handleBreakdownReport = (): void => {
		dispatch(breakdownReportVisibleReducer());
	};

	const renderItem = ({item}: {item: IVehicle}) => {
		return (
			<Vehicle
				id={item.id}
				plateNumber={item.plateNumber}
				make={item.make}
				model={item.model}
			/>
		);
	};

	if (isLoading) {
		return (
			<>
				<Loader />
			</>
		);
	}

	return (
		<>
			<Screen>
				<Topbar title="Hi , Neema" />

				<View style={styles.container}>
					{isOwner && (
						<FlatList
							data={vehicles}
							keyExtractor={(item) => item.id.toString()}
							renderItem={renderItem}
						/>
					)}

					{!isOwner && <AlertTitle />}

					{!isOwner && <Alert />}
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
