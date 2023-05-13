import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {registerVehicleVisibleReducer} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {InputText} from "../../Components/Inputs";
import {ButtonL} from "../../Components/Buttons";
import {ModalNavBack, ModalNavBackWhite} from "../../Components/ModalNavBack";

const RegisterVehicle: React.FC = () => {
	const dispatch = useDispatch();

	const handleBack = (): void => {
		dispatch(registerVehicleVisibleReducer());
	};

	return (
		<>
			<ModalNavBack title="Register vehicle" handleBack={handleBack} />

			<ScrollView contentContainerStyle={styles.container}>
				<InputText label="Manufacturer" />
				<InputText label="Model" />
				<InputText label="Model year" />
				<InputText label="Body type" />
				<InputText label="Fuel type" />
				<InputText label="Chassis number" />
				<InputText label="License plate" />

				<ButtonL action="Register" />
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
});

export {RegisterVehicle};
