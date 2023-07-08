import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Color from "../../Components/Color";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Body, BodyS, HeadingS } from "../../Components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { breakdownVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { RootState } from "../../Redux";
import BreakdownMap from "./BreakdownMap";
import { number } from "card-validator";
import { breakdownLocationReducer } from "../../Redux/Features/ReportBreakdown/ReportBreakdownSlice";
import { getReadableIssues } from "../../Helpers/BreakdownMsg";
import { Text } from "react-native-paper";

interface IVehicle {
  id: number;
  createdAt: string;
  updatedAt: string;
  make: string;
  model: string;
  modelYear: string;
  bodyType: string;
  fuelType: string;
  chassisNumber: string;
  plateNumber: string;
  engineType: string;
  userId: number;
}

interface IBreakdown {
  id: number;
  createAt: string;
  updatedAt: string;
  engineFailure: boolean;
  flatTyre: boolean;
  deadBattery: boolean;
  overHeating: boolean;
  fuelSystemIssue: boolean;
  brakingSystemMalfunction: boolean;
  electricalSystemFailure: boolean;
  latitude: number;
  longitude: number;
  isRepaired: boolean;
  routeId: number;
}

export interface AlertProps {
  vehicle: IVehicle;
  breakdown: IBreakdown;
}

export const Alert: React.FC<AlertProps> = (props) => {
  const dispatch = useDispatch();

  const handleBreakDownLocation = (): void => {
    dispatch(
      breakdownLocationReducer({
        latitude: props.breakdown.latitude,
        longitude: props.breakdown.longitude,
        plateNumber: props.vehicle.plateNumber,
      })
    );

    dispatch(breakdownVisibleReducer());
  };

  const visible = useSelector((state: RootState) => {
    return state.vehicleModal.breakdownVisible;
  });

  return (
    <>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="help-network-outline"
          size={24}
          color={Color.warning}
        />
        <View>
          <Text variant="titleMedium" style={styles.alertText}>
            {props.vehicle.plateNumber}
          </Text>

          <View style={styles.locationContainer}>
            {/* <MaterialCommunityIcons
              name="car-info"
              size={24}
              color={Color.dimblack}
            /> */}
            <Text variant="bodyLarge" style={styles.bodyText}>
              Issue:{" "}
              {getReadableIssues({
                engineFailure: props.breakdown.engineFailure,
                flatTyre: props.breakdown.flatTyre,
                deadBattery: props.breakdown.deadBattery,
                overHeating: props.breakdown.overHeating,
                fuelSystemIssue: props.breakdown.fuelSystemIssue,
                brakingSystemMalfunction:
                  props.breakdown.brakingSystemMalfunction,
                electricalSystemFailure:
                  props.breakdown.electricalSystemFailure,
              })}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleBreakDownLocation}
          >
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons
                name="location-enter"
                size={20}
                color={Color.primary}
              />
              <Text variant="labelMedium" style={styles.locationText}>
                View location
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={visible} animationType="fade">
        <BreakdownMap />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  alertText: {
    fontWeight: "bold",
    marginLeft: 10,
    // color: Color.dimblack,
  },
  container: {
    flexDirection: "row",
    marginTop: 20,
    padding: 12,
    backgroundColor: Color.lightgray,
    borderRadius: 5,
  },
  bodyText: {
    fontWeight: "bold",
    marginLeft: 10,
    // color: Color.dimblack,
    width: "80%",
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  locationText: {
    color: Color.primary,
    fontWeight: "bold",
    marginLeft: 8,
    alignItems: "center",
  },
});
