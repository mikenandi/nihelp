import React from "react";
import { ScrollView, StyleSheet, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerVehicleVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { InputText } from "../../Components/Inputs";
import { ButtonL } from "../../Components/Buttons";
import {
  ModalNavBack,
  ModalNavBackWhite,
} from "../../Components/ModalNavBack";
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
import { postVehicle } from "../../Api/Services/Backend/Vehicle";
import Loader from "../../Components/Loader";
import { Button } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";

const RegisterVehicle: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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

  return (
    <>
      <ModalNavBack title="Register vehicle" handleBack={handleBack} />

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
          onPress={handleRegisterVehicle}
          style={styles.buttonStyle}
          icon={() => (
            <Feather name="arrow-right" size={16} color={Color.white} />
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
  buttonContent: {
    flexDirection: "row-reverse",
  },
  buttonStyle: {
    width: "80%",
  },
});

export { RegisterVehicle };
