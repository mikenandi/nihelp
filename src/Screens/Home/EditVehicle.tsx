import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editVehicleVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { RootState } from "../../Redux";
import { VehicleState } from "../../Redux/Features/Vehicle/VehicleSlice";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { updateVehicle } from "../../Api/Services/Backend/Vehicle";
import { Button } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";
import { VehicleInputsForm } from "./VehicleInputsForm";

const EditVehicle: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const handleBack = (): void => {
    dispatch(editVehicleVisibleReducer());
  };

  const {
    id,
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

  const authToken: string = useSelector(
    (state: RootState) => {
      return state.auth.authToken;
    }
  );

  const handleEdit = async () => {
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

    let response = await updateVehicle(authToken, id, {
      make,
      model,
      modelYear,
      bodyType,
      fuelType,
      chassisNumber,
      plateNumber,
      engineType,
    });

    setIsLoading(false);

    handleBack();

    return;
  };

  return (
    <>
      <ModalNavBack
        title="Edit vehicle details"
        handleBack={handleBack}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <VehicleInputsForm />

        <Button
          mode="contained"
          buttonColor={Color.primary}
          icon={() => (
            <Feather
              name="arrow-right"
              size={16}
              color={Color.white}
            />
          )}
          onPress={handleEdit}
          loading={isLoading}
          style={styles.updateButton}
          contentStyle={styles.buttonContent}
        >
          update details
        </Button>
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
  updateButton: {
    width: "80%",
  },
  buttonContent: {
    flexDirection: "row-reverse",
  },
});

export { EditVehicle };
