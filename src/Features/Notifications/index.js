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

function Notifications(props) {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState(false);

	const handleBack = () => {
		dispatch(notificationVisibleReducer());
		dispatch(resetHelpReducer());
		return;
	};

	const {jack, toolbox, mechanic, battery, tyre} = useSelector((state) => {
		return state.helpType;
	});

	const handleJack = () => {
		dispatch(jackReducer());
		return;
	};

	const handleMechanic = () => {
		dispatch(mechanicReducer());
		return;
	};

	const handleToolbox = () => {
		dispatch(toolboxReducer());
		return;
	};

	const handleBattery = () => {
		dispatch(batteryReducer());
		return;
	};

	const handleTyre = () => {
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
