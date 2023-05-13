import React from "react";
import {StyleSheet, ScrollView, View, TouchableOpacity} from "react-native";
import Screen from "../../Layouts/Screen";
import {useDispatch, useSelector} from "react-redux";
import {Body, HeadingS} from "../../Components/Typography";
import {
	MaterialCommunityIcons,
	Fontisto,
	Octicons,
	Entypo,
	FontAwesome,
	FontAwesome5,
	Ionicons,
} from "@expo/vector-icons";
import Color from "../../Components/Color";
import {ProfileDetail} from "./ProfileDetail";
import Topbar from "../../Layouts/Topbar";
import {logOutReducer} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUserProfile} from "../../Api/Services/Backend/Profile";
import {RootState} from "../../Redux";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
	const dispatch = useDispatch();

	const {userId, authToken} = useSelector((state: any) => {
		return state.auth;
	});

	const {} = useSelector((state: RootState) => {
		return state.auth;
	});

	const handleLogout = async () => {
		/* Delete token and userId */
		await SecureStore.deleteItemAsync("authToken");
		await AsyncStorage.removeItem("userId");

		dispatch(logOutReducer());

		return;
	};

	React.useEffect(() => {
		(async () => {
			try {
				let data = {userId, authToken};

				let response = await getUserProfile(data);

				return;
			} catch (error) {
				console.log(error);

				return;
			}
		})();
	}, []);

	return (
		<>
			<Screen>
				<Topbar title="Profile" />
				<ScrollView contentContainerStyle={styles.scrollContainer}>
					{/* Plate number */}

					<View style={styles.container}>
						<View style={styles.plateNumberContainer}>
							<View style={styles.carAvatar}>
								<Ionicons name="person" size={60} color={Color.primary} />
							</View>
							<View style={styles.plate}>
								<HeadingS>Person / Company</HeadingS>
							</View>

							<View style={styles.abInfo}>
								<MaterialCommunityIcons
									name="car-info"
									size={24}
									color={Color.white}
								/>
							</View>
						</View>

						<ProfileDetail label="Owner" value="NIT Transporters">
							<Octicons name="organization" size={24} color={Color.primary} />
						</ProfileDetail>

						<ProfileDetail label="Email" value={`michaelnandi05@gmail.com`}>
							<MaterialCommunityIcons
								name="email-outline"
								size={30}
								color={Color.primary}
							/>
						</ProfileDetail>

						<ProfileDetail label="Vehicles" value="1234">
							<FontAwesome
								name="drivers-license-o"
								size={24}
								color={Color.primary}
							/>
						</ProfileDetail>

						<ProfileDetail label="Active Routes" value="24">
							<FontAwesome5 name="route" size={26} color={Color.primary} />
						</ProfileDetail>

						<ProfileDetail label="Reported Beakdowns" value="12">
							<MaterialCommunityIcons
								name="tow-truck"
								size={28}
								color={Color.primary}
							/>
						</ProfileDetail>

						<TouchableOpacity onPress={handleLogout} activeOpacity={0.9}>
							<View style={styles.logoutContainer}>
								<Entypo name="log-out" size={24} color={Color.error} />
								<Body style={styles.logoutText}>Log out</Body>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</Screen>
		</>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		paddingBottom: 40,
		paddingTop: 20,
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
	plateNumberContainer: {
		flexDirection: "row",
		paddingLeft: 20,
		alignItems: "center",
		borderBottomWidth: 2,
		borderBottomColor: Color.lightgray,
		paddingBottom: 20,
		borderRadius: 10,
	},
	plate: {
		padding: 8,
		paddingHorizontal: 10,
		marginLeft: 15,
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
