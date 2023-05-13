import React from "react";
import {
	StyleSheet,
	View,
	Image,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ButtonL} from "../../Components/Buttons";
import Color from "../../Components/Color";
import {ModalNavBack, ModalNavBackWhite} from "../../Components/ModalNavBack";
import {getGpsLocation} from "../../Helpers/Location";
import {ModalScreen, ModalScreenWhite} from "../../Layouts/ModalScreen";
import {
	alternatorFailureReducer,
	brakingSystemMalfunctionReducer,
	deadBatteryReducer,
	electricalSystemFailureReducer,
	engineFailureReducer,
	flatTyreReducer,
	fuelSystemIssueReducer,
	overHeatingReducer,
	transmissionIssueReducer,
} from "../../Redux/Features/ReportBreakdown/ReportBreakdownSlice";
import {HelpType} from "./HelpType";
import {breakdownReportVisibleReducer} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {RootState} from "../../Redux";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

interface ReportBreakdownProps {}

const ReportBreakdown: React.FC<ReportBreakdownProps> = (props) => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const handleBack = (): void => {
		dispatch(breakdownReportVisibleReducer());
	};

	const {
		engineFailure,
		flatTyre,
		deadBattery,
		overHeating,
		fuelSystemIssue,
		transmissionIssue,
		brakingSystemMalfunction,
		electricalSystemFailure,
		alternatorFailure,
	} = useSelector((state: RootState) => {
		return state.reportBreakdown;
	});

	const handleEngineFailure = (): void => {
		dispatch(engineFailureReducer());
	};

	const handleFlatTyre = (): void => {
		dispatch(flatTyreReducer());
	};

	const handleDeadBattery = (): void => {
		dispatch(deadBatteryReducer());
	};

	const handleOverHeating = (): void => {
		dispatch(overHeatingReducer());
	};

	const handleFuelSystemIssue = (): void => {
		dispatch(fuelSystemIssueReducer());
	};

	const handleTransmissionIssue = (): void => {
		dispatch(transmissionIssueReducer());
	};

	const handleBrakingSystemMalfunction = (): void => {
		dispatch(brakingSystemMalfunctionReducer());
	};

	const handleElectricalSystemFailure = (): void => {
		dispatch(electricalSystemFailureReducer());
	};

	const handleAlternatorFailure = (): void => {
		dispatch(alternatorFailureReducer());
	};

	const handleSend = async () => {
		try {
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<ModalScreen>
				<ModalNavBack handleBack={handleBack} title="Report breakdown?" />
				<ScrollView contentContainerStyle={styles.contentcontainer}>
					<View style={styles.container}>
						<HelpType
							name="Engine Failure"
							isSelected={engineFailure}
							onPress={handleEngineFailure}>
							<MaterialCommunityIcons
								name="engine-off"
								size={50}
								color={Color.black}
							/>
						</HelpType>
						<HelpType
							name="Flat Tyre"
							isSelected={flatTyre}
							onPress={handleFlatTyre}>
							<Image
								source={require("../../../assets/img/tyre.png")}
								style={styles.img}
							/>
						</HelpType>
						<HelpType
							name="Over Heating"
							isSelected={overHeating}
							onPress={handleOverHeating}>
							<MaterialCommunityIcons
								name="car-seat-heater"
								size={50}
								color={Color.black}
							/>
						</HelpType>
						<HelpType
							name="Dead Battery"
							isSelected={deadBattery}
							onPress={handleDeadBattery}>
							<Image
								source={require("../../../assets/img/battery.png")}
								style={styles.img}
							/>
						</HelpType>
						<HelpType
							name="Fuel Issue"
							isSelected={fuelSystemIssue}
							onPress={handleFuelSystemIssue}>
							<MaterialCommunityIcons
								name="fuel"
								size={60}
								color={Color.black}
							/>
						</HelpType>

						<HelpType
							name="Braking Malfunction"
							isSelected={brakingSystemMalfunction}
							onPress={handleBrakingSystemMalfunction}>
							<Image
								source={require("../../../assets/img/mechanic.png")}
								style={styles.img}
							/>
						</HelpType>

						<HelpType
							name="Electrical Failure"
							isSelected={electricalSystemFailure}
							onPress={handleElectricalSystemFailure}>
							<MaterialIcons
								name="electric-rickshaw"
								size={60}
								color={Color.black}
							/>
						</HelpType>
					</View>
				</ScrollView>
				<View style={styles.bottomContainer}>
					{isLoading ? (
						<ActivityIndicator size={36} color={Color.primary} />
					) : (
						<ButtonL action="Send" onPress={handleSend} />
					)}
				</View>
			</ModalScreen>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		flex: 1,
	},
	img: {
		width: 70,
		aspectRatio: 10 / 10,
		height: undefined,
	},
	contentcontainer: {
		paddingBottom: 40,
	},
	bottomContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
});

export {ReportBreakdown};
