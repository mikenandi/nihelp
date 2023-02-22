import React from "react";
import {StyleSheet, View, Image, ScrollView} from "react-native";
import {useDispatch} from "react-redux";
import {ButtonL} from "../../Components/Buttons";
import {ModalNavBackWhite} from "../../Components/ModalNavBack";
import {ModalScreenWhite} from "../../Layouts/ModalScreen";
import {notificationVisibleReducer} from "../../Redux/Features/Notification/NotificationModalSlice";
import {HelpType} from "./HelpType";

function Notifications(props) {
	const dispatch = useDispatch();

	const handleBack = () => {
		dispatch(notificationVisibleReducer());
		return;
	};
	if (true) {
		return (
			<>
				<ModalScreenWhite>
					<ModalNavBackWhite
						handleBack={handleBack}
						title='What do you need?'
					/>
					<ScrollView contentContainerStyle={styles.contentcontainer}>
						<View style={styles.container}>
							<HelpType name='Jack'>
								<Image
									source={require("../../../assets/img/car-jack.png")}
									style={styles.img}
								/>
							</HelpType>
							<HelpType name='Tyre'>
								<Image
									source={require("../../../assets/img/tyre.png")}
									style={styles.img}
								/>
							</HelpType>
							<HelpType name='Toolbox'>
								<Image
									source={require("../../../assets/img/toolbox.png")}
									style={styles.img}
								/>
							</HelpType>
							<HelpType name='Battery'>
								<Image
									source={require("../../../assets/img/battery.png")}
									style={styles.img}
								/>
							</HelpType>
							<HelpType name='Mechanic'>
								<Image
									source={require("../../../assets/img/mechanic.png")}
									style={styles.img}
								/>
							</HelpType>
						</View>
					</ScrollView>
					<View style={styles.bottomContainer}>
						<ButtonL action='Send' />
					</View>
				</ModalScreenWhite>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		flex: 1,
	},
	emptyContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	emptyNotifyImg: {
		width: "80%",
		height: undefined,
		aspectRatio: 10 / 10,
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
