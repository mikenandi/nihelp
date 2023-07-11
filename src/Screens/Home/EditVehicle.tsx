import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  editVehicleVisibleReducer,
  registerVehicleVisibleReducer,
} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { InputText } from "../../Components/Inputs";
import { ButtonL } from "../../Components/Buttons";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { RootState } from "../../Redux";
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
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { updateVehicle } from "../../Api/Services/Backend/Vehicle";
import Loader from "../../Components/Loader";
import { Button } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";

const EditVehicle: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
      <ModalNavBack title="Edit vehicle details" handleBack={handleBack} />

      <ScrollView contentContainerStyle={styles.container}>
        <InputText
          label="Manufacturer"
          value={make}
          onChangeText={handleMake}
        />
        <InputText
          label="Model"
          value={model}
          onChangeText={handleModel}
        />
        <InputText
          label="Model year"
          value={modelYear}
          onChangeText={handleModelYear}
        />
        <InputText
          label="Body type"
          value={bodyType}
          onChangeText={handleBodyType}
        />
        <InputText
          label="Fuel type"
          value={fuelType}
          onChangeText={handleFuelType}
        />

        <InputText
          label="Engine type"
          value={engineType}
          onChangeText={handleEngineType}
        />
        <InputText
          label="Chassis number"
          value={chassisNumber}
          onChangeText={handleChassiNumber}
        />

        <InputText
          label="License plate"
          value={plateNumber}
          onChangeText={handlePlateNumber}
        />

        <Button
          mode="contained"
          buttonColor={Color.primary}
          icon={() => (
            <Feather name="arrow-right" size={16} color={Color.white} />
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
