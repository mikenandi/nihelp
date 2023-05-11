import React from "react";
import {StyleSheet, ScrollView, View, TouchableOpacity} from "react-native";
import Screen from "../../Layouts/Screen";
import {useDispatch, useSelector} from "react-redux";
import {Body, HeadingM} from "../../Components/Typography";
import {
	MaterialCommunityIcons,
	Fontisto,
	Octicons,
	Entypo,
	Ionicons,
	FontAwesome,
	FontAwesome5,
} from "@expo/vector-icons";
import Color from "../../Components/Color";
import {ProfileDetail} from "./ProfileDetail";
import Topbar from "../../Layouts/Topbar";
import {
	logOutReducer,
	profileDataReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getUserProfile} from "../../Api/Services/Backend/Profile";

// @ts-expect-error TS(7006): Parameter 'props' implicitly has an 'any' type.
function Profile(props) {
	const dispatch = useDispatch();

	const {userId, authToken} = useSelector((state) => {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
		return state.auth;
	});

	const {plateNumber, phoneNumber, brand, model, owner} = useSelector(
		(state) => {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			return state.auth;
		},
	);

	const handleLogout = async () => {
		/* Delete token and userId */
		await SecureStore.deleteItemAsync("authToken");
		await AsyncStorage.removeItem("userId");

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
		dispatch(logOutReducer());

		return;
	};

	React.useEffect(() => {
		(async () => {
			try {
				let data = {userId, authToken};

				let response = await getUserProfile(data);

				dispatch(profileDataReducer(response.data));

				return;
			} catch (error) {
				console.log(error);

				return;
			}
		})();
	}, []);

	return <>
        <Screen>
            <Topbar />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Plate number */}

                <View style={styles.container}>
                    <View style={styles.plateNUmberContainer}>
                        <View style={styles.carAvatar}>
                            <Fontisto name='truck' size={60} color={Color.primary} />
                        </View>
                        <View style={styles.plate}>
                            <HeadingM>🇹🇿 {plateNumber.replace(/-/gi, " ")}</HeadingM>
                        </View>

                        <View style={styles.abInfo}>
                            <MaterialCommunityIcons
                                name='car-info'
                                size={24}
                                color={Color.white}
                            />
                        </View>
                    </View>
                    <ProfileDetail label='Owner' value={owner}>
                        <Octicons name='organization' size={24} color={Color.primary} />
                    </ProfileDetail>
                    <ProfileDetail label='Model' value={`${brand} ${model}`}>
                        <Ionicons
                            name='ios-car-outline'
                            size={28}
                            color={Color.primary}
                        />
                    </ProfileDetail>
                    <ProfileDetail label='Driver' value={phoneNumber}>
                        <FontAwesome
                            name='drivers-license-o'
                            size={24}
                            color={Color.primary}
                        />
                    </ProfileDetail>
                    <ProfileDetail label='Route' value='Dar to Mbeya'>
                        <FontAwesome5 name='route' size={24} color={Color.primary} />
                    </ProfileDetail>

                    <TouchableOpacity onPress={handleLogout} activeOpacity={0.9}>
                        <View style={styles.logoutContainer}>
                            <Entypo name='log-out' size={24} color={Color.error} />
                            <Body style={styles.logoutText}>Log out</Body>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Screen>
    </>;
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
