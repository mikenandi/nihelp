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
import {ModalNavBackWhite} from "../../Components/ModalNavBack";
import {getGpsLocation} from "../../Helpers/Location";
import {ModalScreenWhite} from "../../Layouts/ModalScreen";
import {
	batteryReducer,
	jackReducer,
	mechanicReducer,
	resetHelpReducer,
	toolboxReducer,
	tyreReducer,
} from "../../Redux/Features/Notification/HelpTypeSlice";
import {notificationVisibleReducer} from "../../Redux/Features/Notification/NotificationModalSlice";
import {HelpType} from "./HelpType";

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function Notifications(props) {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState(false);

	const handleBack = () => {
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(notificationVisibleReducer());
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(resetHelpReducer());
		return;
	};

	const {jack, toolbox, mechanic, battery, tyre} = useSelector((state) => {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
		return state.helpType;
	});

	const handleJack = () => {
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(jackReducer());
		return;
	};

	const handleMechanic = () => {
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(mechanicReducer());
		return;
	};

	const handleToolbox = () => {
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(toolboxReducer());
		return;
	};

	const handleBattery = () => {
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(batteryReducer());
		return;
	};

	const handleTyre = () => {
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(tyreReducer());
		return;
	};

	const handleSend = async () => {
		try {
			if (jack || toolbox || mechanic || battery || tyre) {
				setIsLoading(true);

				let location = await getGpsLocation();

				console.log(location);

				return;
			}
			return;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<ModalScreenWhite>
				<ModalNavBackWhite handleBack={handleBack} title='What do you need?' />
				<ScrollView contentContainerStyle={styles.contentcontainer}>
					<View style={styles.container}>
						<HelpType name='Jack' isSelected={jack} onPress={handleJack}>
							<Image
								source={require("../../../assets/img/car-jack.png")}
								style={styles.img}
							/>
						</HelpType>
						<HelpType name='Tyre' isSelected={tyre} onPress={handleTyre}>
							<Image
								source={require("../../../assets/img/tyre.png")}
								style={styles.img}
							/>
						</HelpType>
						<HelpType
							name='Toolbox'
							isSelected={toolbox}
							onPress={handleToolbox}>
							<Image
								source={require("../../../assets/img/toolbox.png")}
								style={styles.img}
							/>
						</HelpType>
						<HelpType
							name='Battery'
							isSelected={battery}
							onPress={handleBattery}>
							<Image
								source={require("../../../assets/img/battery.png")}
								style={styles.img}
							/>
						</HelpType>
						<HelpType
							name='Mechanic'
							isSelected={mechanic}
							onPress={handleMechanic}>
							<Image
								source={require("../../../assets/img/mechanic.png")}
								style={styles.img}
							/>
						</HelpType>
					</View>
				</ScrollView>
				<View style={styles.bottomContainer}>
					{isLoading ? (
						<ActivityIndicator size={36} color={Color.primary} />
					) : (
						<ButtonL action='Send' onPress={handleSend} />
					)}
				</View>
			</ModalScreenWhite>
		</>
	);
}

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

export {Notifications};
