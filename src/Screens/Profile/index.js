import React from "react";
import {StyleSheet, ScrollView, View} from "react-native";
import Screen from "../../Layouts/Screen";
import {useDispatch, useSelector} from "react-redux";
import {Body, HeadingM, HeadingS} from "../../Components/Typography";
import {
	SimpleLineIcons,
	MaterialCommunityIcons,
	Fontisto,
	Octicons,
	Entypo,
	Ionicons,
	FontAwesome,
	FontAwesome5,
	AntDesign,
} from "@expo/vector-icons";
import Color from "../../Components/Color";
import {ProfileDetail} from "./ProfileDetail";
import Topbar from "../../Layouts/Topbar";

function Profile(props) {
	const dispatch = useDispatch();

	return (
		<>
			<Screen>
				<Topbar />
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{/* Plate number */}

					<View style={styles.container}>
						<View style={styles.plateNUmberContainer}>
							<View style={styles.carAvatar}>
								{/* <MaterialCommunityIcons
								name='truck-cargo-container'
								size={64}
								color={Color.primary}
							/> */}

								<Fontisto name='truck' size={60} color={Color.primary} />
							</View>
							<View style={styles.plate}>
								<HeadingM>🇹🇿 T 123 ABZ</HeadingM>
							</View>

							<View style={styles.abInfo}>
								<MaterialCommunityIcons
									name='car-info'
									size={24}
									color={Color.white}
								/>
							</View>
						</View>
						<ProfileDetail label='Company' value='NIT Transporters'>
							<Octicons name='organization' size={24} color={Color.primary} />
						</ProfileDetail>
						<ProfileDetail label='Plate No' value='T 123 ADF'>
							<Ionicons
								name='ios-car-outline'
								size={28}
								color={Color.primary}
							/>
						</ProfileDetail>
						<ProfileDetail label='Driver' value='Neema Faida'>
							<FontAwesome
								name='drivers-license-o'
								size={24}
								color={Color.primary}
							/>
						</ProfileDetail>
						<ProfileDetail label='Route' value='Dar to Mbeya'>
							<FontAwesome5 name='route' size={24} color={Color.primary} />
						</ProfileDetail>

						<View style={styles.logoutContainer}>
							<Entypo name='log-out' size={24} color={Color.error} />
							<Body style={styles.logoutText}>Log out</Body>
						</View>
					</View>
				</ScrollView>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		paddingBottom: 40,
	},
	container: {
		// flex: 1,
	},
	carAvatar: {
		backgroundColor: Color.lightgray,
		width: 100,
		aspectRatio: 10 / 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
	},
	plateNUmberContainer: {
		flexDirection: "row",
		paddingLeft: 20,
		alignItems: "center",
		borderBottomWidth: 2,
		borderBottomColor: Color.lightgray,
		paddingBottom: 20,
	},
	plate: {
		backgroundColor: "#FFA500",
		padding: 8,
		paddingHorizontal: 10,
		marginLeft: 10,
		borderRadius: 2,
	},
	abInfo: {
		width: 40,
		aspectRatio: 10 / 10,
		backgroundColor: Color.primary,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		position: "absolute",
		right: 20,
		bottom: -20,
	},
	logoutContainer: {
		paddingHorizontal: 20,
		borderTopWidth: 6,
		borderTopColor: Color.lightgray,
		marginTop: 15,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
	},
	logoutText: {
		fontWeight: "bold",
		marginLeft: 10,
	},
});

export default Profile;
