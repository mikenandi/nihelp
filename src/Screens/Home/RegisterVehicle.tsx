import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerVehicleVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { RootState } from "../../Redux";
import {
  VehicleState,
  clearVehicleReducer,
} from "../../Redux/Features/Vehicle/VehicleSlice";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { postVehicle } from "../../Api/Services/Backend/Vehicle";
import { Button } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";
import { VehicleInputsForm } from "./VehicleInputsForm";

const RegisterVehicle: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const handleBack = (): void => {
    dispatch(clearVehicleReducer());
    dispatch(registerVehicleVisibleReducer());
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
  }: VehicleState = useSelector(
    (state: RootState) => state.vehicle
  );

  const authToken: string = useSelector(
    (state: RootState) => state.auth.authToken
  );

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

  return (
    <>
      <ModalNavBack
        title="Register vehicle"
        handleBack={handleBack}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <VehicleInputsForm />

        <Button
          mode="contained"
          buttonColor={Color.primary}
          onPress={handleRegisterVehicle}
          style={styles.buttonStyle}
          icon={() => (
            <Feather
              name="arrow-right"
              size={16}
              color={Color.white}
            />
          )}
          contentStyle={styles.buttonContent}
          loading={isLoading}
        >
          Register
        </Button>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 40,
  },
  buttonContent: {
    flexDirection: "row-reverse",
  },
  buttonStyle: {
    width: "80%",
  },
});

export { RegisterVehicle };
