import {
	FontAwesome5,
	Fontisto,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import Color from "../../Components/Color";
import {HeadingS} from "../../Components/Typography";
import {ModalNavBack, ModalNavBackWhite} from "../../Components/ModalNavBack";
import {useDispatch} from "react-redux";
import {vehicleDetailsVisibleReducer} from "../../Redux/Features/Vehicle/VehicleModalSlice";

const VehicleDetails: React.FC = () => {
	const dispatch = useDispatch();

	const handleBack = (): void => {
		dispatch(vehicleDetailsVisibleReducer());
	};

	return (
		<>
			<ModalNavBack title="Vehicle Details" handleBack={handleBack} />

			<ScrollView contentContainerStyle={styles.wrapperContainer}>
				<View style={styles.container}>
					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<Fontisto name="truck" size={30} color={Color.primary} />
						</View>
						<HeadingS style={styles.title}>Plate no: T 128 AZD</HeadingS>
					</View>

					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								name="robot-industrial"
								size={30}
								color={Color.primary}
							/>
						</View>
						<HeadingS style={styles.title}>Make: Toyoya</HeadingS>
					</View>

					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<MaterialIcons
								name="merge-type"
								size={35}
								color={Color.primary}
							/>
						</View>

						<HeadingS style={styles.title}>Model: Corola</HeadingS>
					</View>

					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome5
								name="business-time"
								size={24}
								color={Color.primary}
							/>
						</View>
						<HeadingS style={styles.title}>Model Year: 2023</HeadingS>
					</View>

					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome5
								name="truck-loading"
								size={24}
								color={Color.primary}
							/>
						</View>
						<HeadingS style={styles.title}>Chasis: uv/123..ldo/12</HeadingS>
					</View>

					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								name="fuel"
								size={35}
								color={Color.primary}
							/>
						</View>
						<HeadingS style={styles.title}>Fuel: Petrol</HeadingS>
					</View>

					<View style={styles.detailContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								name="engine"
								size={30}
								color={Color.primary}
							/>
						</View>
						<HeadingS style={styles.title}>Engine Type: 2023</HeadingS>
					</View>

					<View style={styles.routeContainer}>
						<FontAwesome5 name="route" size={28} color={Color.primary} />
						<HeadingS style={styles.routeText}>From Dar To iringa</HeadingS>
					</View>
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderRadius: 10,
		marginVertical: 10,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		// elevation: 5,
		width: "96%",
		// flex: 1,
		marginHorizontal: 20,
	},
	title: {
		fontWeight: "bold",
		marginBottom: 10,
		marginLeft: 15,
	},
	text: {
		// fontSize: 16,
		marginBottom: 5,
	},
	detailsContainer: {
		marginLeft: 15,
	},
	routeContainer: {
		flexDirection: "row",
		marginTop: 25,
		padding: 15,
		backgroundColor: Color.lightgray,
		borderRadius: 25,
		borderTopLeftRadius: 2,
		// borderTopRightRadius: 2,
	},
	routeText: {
		marginLeft: 10,
		color: Color.dimblack,
		fontWeight: "bold",
	},
	iconContainer: {
		backgroundColor: Color.lightgray,
		width: 60,
		aspectRatio: 1 / 1,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	wrapperContainer: {
		flex: 1,
		alignItems: "center",
		paddingBottom: 20,
	},
	detailContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
	},
});

export {VehicleDetails};
