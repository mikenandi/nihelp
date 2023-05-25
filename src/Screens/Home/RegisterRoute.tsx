import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {registerVehicleVisibleReducer} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {InputText} from "../../Components/Inputs";
import {ButtonL} from "../../Components/Buttons";
import {ModalNavBack, ModalNavBackWhite} from "../../Components/ModalNavBack";
import {RootState} from "../../Redux";
import {
	VehicleState,
	bodyTypeReducer,
	chassisNumberReducer,
	clearVehicleReducer,
	engineTypeReducer,
	fuelTypeReducer,
	makeReducer,
	modelReducer,
	modelYearReducer,
	plateNumberReducer,
} from "../../Redux/Features/Vehicle/VehicleSlice";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import {postVehicle} from "../../Api/Services/Backend/Vehicle";
import Loader from "../../Components/Loader";
import {Body, HeadingS} from "../../Components/Typography";
import {FontAwesome5} from "@expo/vector-icons";
import Color from "../../Components/Color";
import {createRouteVisibleReducer} from "../../Redux/Features/Route/RouteModal";

const RegisterRoute: React.FC = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const handleBack = (): void => {
		dispatch(createRouteVisibleReducer());
	};

	const {
		make,
		model,
		modelYear,
		bodyType,
		fuelType,
		chassisNumber,
		plateNumber,
		engineType,
	}: VehicleState = useSelector((state: RootState) => {
		return state.vehicle;
	});

	const authToken: string = useSelector((state: RootState) => {
		return state.auth.authToken;
	});

	const handleMake = (make: string): void => {
		dispatch(makeReducer(make));
	};

	const handleModel = (model: string): void => {
		dispatch(modelReducer(model));
	};

	const handleModelYear = (modelYear: string): void => {
		dispatch(modelYearReducer(modelYear));
	};

	const handleBodyType = (bodyType: string): void => {
		dispatch(bodyTypeReducer(bodyType));
	};

	const handleFuelType = (fuelType: string): void => {
		dispatch(fuelTypeReducer(fuelType));
	};

	const handleChassiNumber = (chassisNumber: string): void => {
		dispatch(chassisNumberReducer(chassisNumber));
	};

	const handlePlateNumber = (plateNumber: string): void => {
		dispatch(plateNumberReducer(plateNumber));
	};

	const handleEngineType = (engineType: string): void => {
		dispatch(engineTypeReducer(engineType));
	};

	const handleRegisterVehicle = async () => {
		if (
			!make ||
			!model ||
			!modelYear ||
			!bodyType ||
			!fuelType ||
			!chassisNumber ||
			!plateNumber ||
			!engineType
		) {
			dispatch(errorMsg("Fill all fields"));

			return;
		}

		setIsLoading(true);

		let response = await postVehicle(
			{
				make,
				model,
				modelYear,
				bodyType,
				fuelType,
				chassisNumber,
				plateNumber,
				engineType,
			},
			authToken
		);

		if (response.statusCode === 409) {
			dispatch(errorMsg(response.message));

			setIsLoading(false);
			return;
		}

		setIsLoading(false);

		handleBack();

		return;
	};

	if (isLoading)
		return (
			<>
				<Loader />
			</>
		);

	return (
		<>
			<ModalNavBack title="Where are you going?" handleBack={handleBack} />

			<ScrollView contentContainerStyle={styles.container}>
				<InputText label="Start" value={make} onChangeText={handleMake} />
				<InputText
					label="Destination"
					value={model}
					onChangeText={handleModel}
				/>

				<View style={styles.routeContainer}>
					<FontAwesome5 name="road" size={24} color="black" />
					<HeadingS style={styles.titleText}>via road</HeadingS>
				</View>

				<Body style={styles.routeDesc}>Dar Moro Iringa Mby</Body>

				<ButtonL action="Register" onPress={handleRegisterVehicle} />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
	},
	registerText: {
		marginLeft: 10,
	},
	container: {
		alignItems: "center",
		paddingBottom: 40,
	},
	routeContainer: {
		flexDirection: "row",
		marginTop: 10,
		backgroundColor: Color.lightgray,
		width: "80%",
		padding: 10,
	},
	routeDesc: {
		fontWeight: "bold",
	},
	titleText: {
		marginLeft: 10,
	},
});

export {RegisterRoute};
