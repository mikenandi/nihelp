import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../Components/Inputs";
import { StyleSheet } from "react-native";
import { RootState } from "../../Redux";
import {
  VehicleState,
  inputVehicleReducer,
} from "../../Redux/Features/Vehicle/VehicleSlice";
import { Button } from "react-native-paper";
import Color from "../../Components/Color";

export const VehicleInputsForm: React.FC = () => {
  const dispatch = useDispatch();

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

  const handleChange = (
    name: string,
    value: string
  ): void => {
    dispatch(inputVehicleReducer({ name, value }));
  };

  return (
    <>
      <InputText
        label="Manufacturer"
        value={make}
        onChangeText={(value) => {
          handleChange("make", value);
        }}
      />
      <InputText
        label="Model"
        value={model}
        onChangeText={(value) => {
          handleChange("model", value);
        }}
      />
      <InputText
        label="Model year"
        value={modelYear}
        onChangeText={(value) => {
          handleChange("modelYear", value);
        }}
      />
      <InputText
        label="Body type"
        value={bodyType}
        onChangeText={(value) => {
          handleChange("bodyType", value);
        }}
      />
      <InputText
        label="Fuel type"
        value={fuelType}
        onChangeText={(value) => {
          handleChange("fuelType", value);
        }}
      />

      <InputText
        label="Engine type"
        value={engineType}
        onChangeText={(value) => {
          handleChange("engineType", value);
        }}
      />
      <InputText
        label="Chassis number"
        value={chassisNumber}
        onChangeText={(value) => {
          handleChange("chassisNumber", value);
        }}
      />

      <InputText
        label="License plate"
        value={plateNumber}
        onChangeText={(value) => {
          handleChange("plateNumber", value);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});
