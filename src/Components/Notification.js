import React from "react";
import Color from "../Components/Color";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, View, TouchableOpacity, Modal, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {notificationVisibleReducer} from "../Redux/Features/Notification/NotificationModalSlice";
import {Notifications} from "../Features/Notifications";

function Notification(props) {
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
			{/* Hightlighting component */}
			<TouchableOpacity
				// underlayColor={Color.dimblack}
				activeOpacity={0.8}
				onPress={handleNotification}>
				<View style={styles.container}>
					<Ionicons
						name='md-notifications'
						size={28}
						color={Color.warning}
						style={styles.icon}
					/>
					<View style={styles.dot} />
				</View>
			</TouchableOpacity>

			<Modal transparent={false} animationType='fade' visible={visible}>
				<Notifications />
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
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

export {Notification};
