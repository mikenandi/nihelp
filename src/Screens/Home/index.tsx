import React from "react";
import {StyleSheet, Modal, View, FlatList} from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import {useDispatch, useSelector} from "react-redux";
import {
	AntDesign,
	FontAwesome5,
	Foundation,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
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
import {getVehicle, getVehicles} from "../../Api/Services/Backend/Vehicle";
import {Body, HeadingS} from "../../Components/Typography";
import {getRoutes} from "../../Api/Services/Backend/Route";
import {RegisterRoute} from "./RegisterRoute";

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

	const {authToken, isOwner, name} = useSelector((state: RootState) => {
		return state.auth;
	});

	const [vehicles, setVehicles] = React.useState<IVehicle[]>([]);

	const visible: boolean = useSelector((state: RootState) => {
		return state.vehicleModal.registerVehicleVisible;
	});

	const createRouteVisible: boolean = useSelector((state: RootState) => {
		return state.routeModal.createRouteVisible;
	});

	const getFirstname = (name: string): string | undefined => {
		return name.trim().split(" ")[0];
	};

	const handleLogout = async (): Promise<void> => {
		await SecureStorage.deleteItemAsync("authToken");

		dispatch(logOutReducer());
	};

	const routeFetch = async () => {
		let response = await getRoutes(authToken);

		return response;
	};

	const userProfileFetch = async (): Promise<void> => {
		try {
			setIsLoading(true);
			let response = await getUserProfile({authToken});

			if (response.statusCode === 401) {
				handleLogout();

				return;
			}

			if (response.isOwner) {
				let vehicles = await getVehicles(authToken);

				setVehicles(vehicles);

				dispatch(
					ownerProfileReducer({
						name: response.name,
						email: response.email,
						phoneNumber: response.phoneNumber,
						vehicles: vehicles.length,
						isOwner: response.isOwner,
					})
				);

				setIsLoading(false);

				return;
			}

			let routes = await routeFetch();

			if (routes.length === 0) {
				await handleLogout();

				return;
			}

			let vehicle = await getVehicle(authToken, routes[0].vehicleId);

			setVehicles([vehicle]);

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
	};

	React.useEffect(() => {
		userProfileFetch();
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
				<Topbar title={`Hi , ${getFirstname(name)}`} />

				<View style={styles.container}>
					<FlatList
						data={vehicles}
						keyExtractor={(item) => item.id.toString()}
						renderItem={renderItem}
						contentContainerStyle={styles.contentContainer}
					/>

					{vehicles.length === 0 && isOwner && (
						<View style={styles.emptyContainer}>
							<MaterialCommunityIcons
								name="truck-plus-outline"
								size={240}
								color={Color.lightgray}
							/>
							<HeadingS style={styles.msgText}>Register vehicle</HeadingS>
						</View>
					)}

					{!isOwner && <AlertTitle />}

					{!isOwner && <Alert />}
				</View>

				{isOwner && (
					<FAB onPress={handleRegisterVehicle}>
						<Foundation name="plus" size={30} color={Color.dimblack} />
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

			<Modal visible={createRouteVisible} animationType="fade">
				<RegisterRoute />
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
	emptyContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
	},
	msgText: {
		color: Color.dimblack,
		fontWeight: "bold",
	},
	contentContainer: {
		width: "100%",
	},
});

export default Home;
