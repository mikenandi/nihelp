import React from "react";
import Color from "../Components/Color";
import {HeadingL, HeadingM, HeadingS} from "../Components/Typography";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, View, TouchableOpacity, Modal, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {notificationVisibleReducer} from "../Redux/Features/Notification/NotificationModalSlice";
import {Notifications} from "../Features/Notifications";

function Topbar(props) {
	const dispatch = useDispatch();

	const visible = useSelector((state) => {
		return state.notificationModal.notificationVisible;
	});

	const handleNotification = () => {
		dispatch(notificationVisibleReducer());

		return;
	};

	return (
		<>
			<View style={styles.container}>
				<HeadingM style={styles.logoText}>Profile</HeadingM>

				{/* Hightlighting component */}
				{/* <TouchableOpacity
					// underlayColor={Color.dimblack}
					activeOpacity={0.8}
					onPress={handleNotification}>
					<View>
						<Ionicons
							name='md-notifications-outline'
							size={28}
							color={Color.black}
							style={styles.icon}
						/>
						<View style={styles.dot} />
					</View>
				</TouchableOpacity> */}
			</View>

			<Modal transparent={false} animationType='fade' visible={visible}>
				<Notifications />
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		paddingBottom: 10,
		paddingTop: 5,
		backgroundColor: Color.white,
	},
	logoText: {
		color: Color.dimblack,
		// fontWeight: "bold",
		// fontFamily: "poppins",
		// fontSize: ,
	},
	icon: {},
	avatar: {
		width: "14%",
		aspectRatio: 10 / 10,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: Color.lightgray,
	},
	dot: {
		borderWidth: 2,
		borderColor: Color.white,
		width: 12,
		aspectRatio: 1 / 1,
		backgroundColor: Color.error,
		borderRadius: 20,
		position: "absolute",
		right: 3,
		top: 2,
	},
	logoDot: {
		color: Color.warning,
		fontSize: 56,
	},
});

export default React.memo(Topbar);
